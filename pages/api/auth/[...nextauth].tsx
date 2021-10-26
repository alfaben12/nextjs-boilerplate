import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils';
import apiService from '../../../utils/apiService';

type UserValues = {
  id: number,
  email: string,
  name: string
}
type SigninValues = {
  token: string,
  shop: UserValues
}

type CredentialsValues = {
  email: string,
  password: string
}
const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      async authorize(credentials: CredentialsValues) {
        try {
          const user = await apiService.post('auth/signin', {
            email: credentials.email,
            password: credentials.password,
          });

          if (user) {
            const res:SigninValues = user.data;
            return { id: res.shop.id, name: res.shop.name, email: res.shop.email };
          }
          return null;
        } catch (e) {
          throw new Error('There was an error on user authentication');
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
