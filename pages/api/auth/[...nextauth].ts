import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import CognitoProvider from 'next-auth/providers/cognito';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  return await NextAuth(req, res, {
    providers: [
        CognitoProvider({
            clientId: process.env.COGNITO_CLIENT_ID || '',
            issuer: process.env.COGNITO_ISSUER,
            clientSecret: process.env.COGNITO_CLIENT_SECRET || '',
          })
    ],
    callbacks: {
      async jwt({ token, account }) {
        // Persist the OAuth access_token to the token right after signin
        if (account) {
          token.accessToken = account.access_token
        }
        return token;
      },
      async session({ session, token, user }) {
        // Send properties to the client, like an access_token from a provider.
        session.accessToken = token.accessToken
        session.user = user;
        return session;
      }
    },
    debug: false,
  })
}