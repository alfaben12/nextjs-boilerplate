import type { NextApiRequest, NextApiResponse } from 'next';
import { deserialize } from 'deserialize-json-api';
import apiRouteService from '../../../utils/apiRouteService';
import { CategoriesResponse } from '../../../@types/response/categories/categories-response';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CategoriesResponse>,
) {
  const token = req.cookies['jwt-token'] ?? req.headers.authorization?.split(' ')[1];

  const { data } = await apiRouteService(token).get(
    'categories',
    {
      params: {
        page: req.query.page,
        limit: req.query.limit,
        sort: req.query.sort,
        keyword: req.query.keyword,
      },
    },
  );

  const deserializeData = deserialize(data);
  return res.status(200).json({ result: deserializeData });
}
