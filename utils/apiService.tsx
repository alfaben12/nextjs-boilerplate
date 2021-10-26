import axios, { AxiosInstance } from 'axios';
import nookies, { parseCookies } from 'nookies';

export default function apiService(ctx?: any): AxiosInstance {
  const httpClient = axios.create({
    baseURL: 'http://localhost:3000/api/',
  });

  const cookies = nookies.get(ctx);
  let jwt = cookies['jwt-token'];
  if (jwt === undefined) {
    jwt = parseCookies()['jwt-token'];
  }

  httpClient.interceptors.request.use((config) => {
    const newConfig = config;
    newConfig.headers.Authorization = jwt ? `Bearer ${jwt}` : '<empty>';
    return newConfig;
  });

  return httpClient;
}
