import axios, { AxiosInstance } from 'axios';

export default function apiRouteService(jwt?: string): AxiosInstance {
  const httpClient = axios.create({
    baseURL: 'http://localhost:5000/v1',
  });

  httpClient.interceptors.request.use((config) => {
    const newConfig = config;
    newConfig.headers.Authorization = jwt ? `Bearer ${jwt}` : '<empty>';
    return newConfig;
  });

  return httpClient;
}
