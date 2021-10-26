// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { deserialize } from 'deserialize-json-api';
import apiService from '../../../utils/apiService';
import { SigninResponse } from '../../../@types/response/signin/signin-response';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SigninResponse>,
) {
  const { data } = await apiService(req.cookies['jwt-token']).post(
    'auth/signin',
    req.body,
  );

  const deserializeData = deserialize(data);
  return res.status(200).json({ result: deserializeData });
}
