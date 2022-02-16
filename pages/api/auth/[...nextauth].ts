import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import { getProviders } from '../../../helpers';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  return await NextAuth(req, res, {
    providers: getProviders(process.env.NODE_ENV),
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
    debug: process.env.NODE_ENV !== 'production',
  })
}
