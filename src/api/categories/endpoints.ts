import { instance } from '../axios';
import { GetCategoriesResponse, PostCategoryBody } from './types';

export const getCategories = (): Promise<GetCategoriesResponse> => {
  return instance.get('/categories');
};

export const postCategory = (category: PostCategoryBody) => {
  return instance.post('/categories', category);
};

export const deleteCategory = (id: number) => {
  return instance.delete(`/categories?id=${id}`);
};
