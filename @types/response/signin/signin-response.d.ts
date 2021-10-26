export interface SigninResponse {
  result: Result;
}
export interface Result {
  data: Data;
  jsonapi: Jsonapi;
}
export interface Data {
  type: string;
  id: string;
  links: Links;
  uuid: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  accessToken: string;
}
export interface Links {
  self: string;
}
export interface Jsonapi {
  version: string;
}
