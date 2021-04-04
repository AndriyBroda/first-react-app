import { AxiosResponse } from 'axios';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type GetPostsResponse = AxiosResponse<Post[]>;
export type PostPostResponse = AxiosResponse<Post>;
export type PutPostResponse = AxiosResponse<Post>;
export type DeletePostResponse = AxiosResponse;
