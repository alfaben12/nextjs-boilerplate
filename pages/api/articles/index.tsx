import type { NextApiRequest, NextApiResponse } from 'next';
import { deserialize } from 'deserialize-json-api';
import { ArticlesResponse } from '../../../@types/response/article/articles-response';
import apiRouteService from '../../../utils/apiRouteService';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ArticlesResponse>,
) {
  const token = req.cookies['jwt-token'] ?? req.headers.authorization?.split(' ')[1];

  const { data } = await apiRouteService(token).get(
    'articles',
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
