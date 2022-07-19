package org.wcdevs.blog.awsdeployerfe;

import org.wcdevs.blog.cdk.ApplicationEnvironment;
import org.wcdevs.blog.cdk.CognitoStack;
import org.wcdevs.blog.cdk.ElasticContainerService;
import org.wcdevs.blog.cdk.Network;
import org.wcdevs.blog.cdk.Util;
import software.amazon.awscdk.App;
import software.amazon.awscdk.Environment;
import software.amazon.awscdk.Stack;
import software.amazon.awscdk.StackProps;
import software.amazon.awscdk.services.iam.Effect;
import software.amazon.awscdk.services.iam.PolicyStatement;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static java.util.Map.entry;

public class EcsDeployer {
  private static final String SERVICE_STACK_NAME = "fe-service-stack";

  public static void main(String[] args) {
    var app = new App();

    String environmentName = Util.getValueInApp("environmentName", app);
    String accountId = Util.getValueInApp("accountId", app);
    String region = Util.getValueInApp("region", app);
    String applicationName = Util.getValueInApp("applicationName", app);
    String dockerRepositoryName = Util.getValueInApp("dockerRepositoryName", app, false);
    String dockerImageTag = Util.getValueInApp("dockerImageTag", app, false);
    String dockerImageUrl = Util.getValueInApp("dockerImageUrl", app, false);
    var appListenPort = Util.getValueOrDefault("appPort", app, "3000");
    var appHealthCheckPath = Util.getValueOrDefault("healthCheckPath", app, "/");
    var appHealthCheckPort = Util.getValueOrDefault("healthCheckPort", app, "3000");

    var awsEnvironment = Util.environmentFrom(accountId, region);
    var appEnv = new ApplicationEnvironment(applicationName, environmentName);

    var serviceStack = serviceStack(app, appEnv, awsEnvironment);
    var parametersStack = parametersStack(app, appEnv, awsEnvironment);

    var networkOutputParameters = Network.outputParametersFrom(serviceStack, appEnv);
    var cognitoParams = CognitoStack.getOutputParameters(parametersStack, environmentName);

    var commonEnvVars = commonEnvVars(environmentName, appListenPort, appHealthCheckPort);
    var cognitoEnvVars = cognitoEnvVars(serviceStack, appEnv, cognitoParams);
    var environmentVariables = environmentVariables(commonEnvVars, cognitoEnvVars);

    var dockerImage = dockerImage(dockerRepositoryName, dockerImageTag, dockerImageUrl);
    var inputParameters = inputParameters(dockerImage, environmentVariables, appListenPort,
                                          appHealthCheckPath, appHealthCheckPort);

    ElasticContainerService.newInstance(serviceStack, "FEECServiceApp", awsEnvironment,
                                        appEnv, inputParameters,
                                        networkOutputParameters);

    app.synth();
  }

  private static Stack serviceStack(App app, ApplicationEnvironment applicationEnvironment,
                                    Environment awsEnvironment) {
    var serviceStackName = applicationEnvironment.prefixed(SERVICE_STACK_NAME);
    return new Stack(app, "FEServiceStack", StackProps.builder()
                                                      .stackName(serviceStackName)
                                                      .env(awsEnvironment)
                                                      .build());
  }

  private static Stack parametersStack(App app, ApplicationEnvironment applicationEnvironment,
                                       Environment awsEnvironment) {
    var timeId = System.currentTimeMillis();
    var pStackName = Util.joinedString(Util.DASH_JOINER, "parameters", SERVICE_STACK_NAME, timeId);
    var prefixedParamsStackName = applicationEnvironment.prefixed(pStackName);

    return new Stack(app, prefixedParamsStackName,
                     StackProps.builder()
                               .stackName(prefixedParamsStackName)
                               .env(awsEnvironment)
                               .build());
  }

  private static Map<String, String> commonEnvVars(String environmentName, String appListenPort,
                                                   String appHealthCheckPort) {
    return Map.of("FE_APP_LISTEN_PORT", appListenPort,
                  "FE_APP_MANAGEMENT_PORT", appHealthCheckPort,
                  "ENVIRONMENT_NAME", environmentName);
  }

  private static Map<String, String> cognitoEnvVars(Stack scope, ApplicationEnvironment appEnv,
                                                    CognitoStack.OutputParameters cognitoParams) {
    var cognitoClientSecret = CognitoStack.getUserPoolClientSecret(scope, appEnv);
    var cognitoClientSecretValue
        = cognitoClientSecret.secretValueFromJson(CognitoStack.USER_POOL_CLIENT_SECRET_HOLDER)
                             .toString();
    var cognitoClientId
        = cognitoClientSecret.secretValueFromJson(CognitoStack.USER_POOL_CLIENT_ID_HOLDER)
                             .toString();
    var cognitoClientName
        = cognitoClientSecret.secretValueFromJson(CognitoStack.USER_POOL_CLIENT_NAME_HOLDER)
                             .toString();

    return Map.ofEntries(entry("COGNITO_PROVIDER_URL", cognitoParams.getProviderUrl()),
                         entry("COGNITO_CLIENT_ID", cognitoClientId),
                         entry("COGNITO_CLIENT_NAME", cognitoClientName),
                         entry("COGNITO_CLIENT_SECRET", cognitoClientSecretValue));
  }

  private static Map<String, String> environmentVariables(Map<String, String> commonEnvVar,
                                                          Map<String, String> cognitoEnvVar) {
    return Stream.concat(commonEnvVar.entrySet().stream(),
                         cognitoEnvVar.entrySet().stream())
                 .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
  }

  private static ElasticContainerService.DockerImage dockerImage(String dockerRepositoryName,
                                                                 String dockerImageTag,
                                                                 String dockerImageUrl) {
    return ElasticContainerService.DockerImage.builder()
                                              .dockerRepositoryName(dockerRepositoryName)
                                              .dockerImageTag(dockerImageTag)
                                              .dockerImageUrl(dockerImageUrl)
                                              .build();
  }

  private static ElasticContainerService.InputParameters inputParameters(
      ElasticContainerService.DockerImage dockerImage, Map<String, String> envVariables,
      String appPort, String healthCheckPath, String healthCheckPort
                                                                        ) {
    var defaultPort = 3000;

    return ElasticContainerService.InputParameters
        .builder()
        .dockerImage(dockerImage)
        .environmentVariables(envVariables)
        .taskRolePolicyStatements(taskRolePolicyStatements())
        .applicationPort(intValueFrom(appPort, defaultPort))
        .healthCheckPort(intValueFrom(healthCheckPort, defaultPort))
        .healthCheckPath(healthCheckPath)
        .healthCheckIntervalSeconds(60)
        .desiredInstancesCount(1)
        .build();
  }

  private static int intValueFrom(String rawValue, int defaultIfError) {
    try {
      return Integer.parseInt(rawValue);
    } catch (Exception ignored) {
      // let's use the default one
    }
    return defaultIfError;
  }

  private static List<PolicyStatement> taskRolePolicyStatements() {
    return List.of(policyStatement("cognito-idp:*"), policyStatement("cloudwatch:PutMetricData"));
  }

  private static PolicyStatement policyStatement(String action) {
    return policyStatement(List.of(action));
  }

  private static PolicyStatement policyStatement(List<String> actions) {
    return PolicyStatement.Builder.create()
                                  .effect(Effect.ALLOW)
                                  .resources(List.of("*"))
                                  .actions(actions)
                                  .build();
  }
}
