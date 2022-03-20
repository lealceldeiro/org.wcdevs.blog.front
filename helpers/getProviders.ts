import { Provider } from 'next-auth/providers';
import CognitoProvider from 'next-auth/providers/cognito';
import KeycloakProvider from 'next-auth/providers/keycloak';

export const getProviders = (environment: string): Provider[] => {
    if (environment === 'production') {
        return [
            CognitoProvider({
                clientId: process.env.COGNITO_CLIENT_ID || '',
                issuer: process.env.COGNITO_ISSUER,
                clientSecret: process.env.COGNITO_CLIENT_SECRET || '',
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
                clientId: '1obaprb6566jf16qft92brm29j',
                issuer: 'https://cognito-idp.eu-west-3.amazonaws.com/eu-west-3_hp4aOWuAe',
                clientSecret:'18qui6rpnlnkvqui8g201s1c916v8i0pdicid1otndblefcm0fn4',
            })
        ];
    } else { // test environment 
        return [];
    }
}
