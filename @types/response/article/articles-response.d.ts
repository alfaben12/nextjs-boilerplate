export interface ArticlesResponse {
  result: Result;
}
export interface Result {
  data?: DataEntity[] | null;
  jsonapi: Jsonapi;
  meta: Meta;
  links: CategoryLinks;
}
export interface DataEntity {
  type: string;
  id: string;
  links: CategoryLinks;
  uuid: string;
  title: string;
  body: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  category: Category;
  user: User;
}
export interface CategoryLinks {
  self: string;
  first: string;
  previous: string;
  next: string;
  last: string;
}
export interface Category {
  type: string;
  id: string;
  links: CategoryLinks;
  uuid: string;
  name: string;
  description: string;
  isActive: number;
  createdAt: string;
  updatedAt: string;
}
export interface User {
  type: string;
  id: string;
  links: UserLinks;
  uuid: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
export interface UserLinks {
  self: string;
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
