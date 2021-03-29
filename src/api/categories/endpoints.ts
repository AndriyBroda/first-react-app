import Axios from '../axios';
import { GetCategoriesResponse, PostCategoryBody } from './types';

export const getCategories = (): Promise<GetCategoriesResponse> => {
  return Axios.get('/categories');
};

export const postCategory = (category: PostCategoryBody) => {
  return Axios.post('/categories', category);
};

export const deleteCategory = (id: number) => {
  return Axios.delete(`/categories?id=${id}`);
};
