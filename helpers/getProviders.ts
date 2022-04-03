import { Provider } from 'next-auth/providers';
import CognitoProvider from 'next-auth/providers/cognito';
import KeycloakProvider from 'next-auth/providers/keycloak';

export const getProviders = (environment: string): Provider[] => {
    if (environment === 'production') {
        return [
            CognitoProvider({
                clientId: '1o8to1egjuvk6q1puvr5s2meo0',
                issuer: 'https://cognito-idp.eu-west-3.amazonaws.com/eu-west-3_IninyXiqR',
                clientSecret: '1fueq4ouadsnccdcld1o73vjfpqoamb8le05hlg7jmtor8j77ia'
            })
        ];
    } else if (environment === 'development') {
        return [
            KeycloakProvider({
                clientId: process.env.KEYCLOAK_ID || '',
                clientSecret: process.env.KEYCLOAK_SECRET || '',
                issuer: process.env.KEYCLOAK_ISSUER,
            }),
            CognitoProvider({
                clientId: process.env.COGNITO_CLIENT_ID || '',
                issuer: process.env.COGNITO_ISSUER,
                clientSecret: process.env.COGNITO_CLIENT_SECRET || '',
            })
        ];
    } else { // test environment 
        return [];
    }
}
