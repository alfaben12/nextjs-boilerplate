export interface CategoriesResponse {
  result: Result;
}
export interface Result {
  data?: DataEntity[] | null;
  jsonapi: Jsonapi;
  meta: Meta;
  links: Links;
}
export interface DataEntity {
  type: string;
  id: string;
  links: Links;
  uuid: string;
  name: string;
  description: string;
  isActive: number;
  createdAt: string;
  updatedAt: string;
  articles?: ArticlesEntity[] | null;
}
export interface Links {
  self: string;
  first: string;
  previous: string;
  next: string;
  last: string;
}
export interface ArticlesEntity {
  type: string;
  id: string;
  links: ArticleLinks;
  uuid: string;
  title: string;
  body: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  user: User;
}
export interface ArticleLinks {
  self: string;
}
export interface User {
  type: string;
  id: string;
  links: ArticleLinks;
  uuid: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
export interface Jsonapi {
  version: string;
}
export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
