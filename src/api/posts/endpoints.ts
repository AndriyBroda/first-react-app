import Axios from '../axios';
import { FilterOptions } from '../../hooks/posts/usePosts';
import { DeletePostResponse, GetPostsResponse, Post, PostPostResponse, PutPostResponse } from './types';
import { getQueryParams } from '../../utils/helpers';

export const getPosts = (filterOptions: FilterOptions): Promise<GetPostsResponse> => {
  return Axios.get('/posts' + getQueryParams(filterOptions));
};

export const postPost = (body: Omit<Post, 'id'>): Promise<PostPostResponse> => {
  return Axios.post('/posts', body);
};

export const putPost = (post: Post): Promise<PutPostResponse> => {
  return Axios.put(`/posts/${post.id}`, post);
};

export const deletePost = (id: number): Promise<DeletePostResponse> => {
  return Axios.delete(`/posts/${id}`);
};
