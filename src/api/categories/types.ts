import { AxiosResponse } from 'axios';
import { PaginationResponse } from '../../models/api';

export interface Category {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  icon: {
    id: number;
    class: string;
    createdAt: string;
    updatedAt: string;
  };
}

export type GetCategoriesResponse = AxiosResponse<PaginationResponse<Category>>;
export type PostCategoryBody = {
  name: string;
  description: string;
  iconId: number;
};
