import React from 'react';
import useSWR, { cache } from 'swr';
import { Post, getPosts, postPost, putPost, deletePost } from '../../api/posts';
import { getQueryParams } from '../../utils/helpers';

export interface FilterOptions {
  _page?: number;
  _limit?: number;
}

export const usePosts = (filterOptions: FilterOptions) => {
  const url = '/posts' + getQueryParams(filterOptions);

  const { data, error, mutate } = useSWR(url, () => getPosts(filterOptions).then(r => r.data));

  const addPost = async (post: Omit<Post, 'id'>) => {
    const res = await postPost(post);
    const cached = cache.get(url) as Post[];

    mutate([...cached, res.data], false);

    console.log(`Post with Title ${post.title} and ID ${res.data.id} was added!`);
  };

  const removePost = async (id: number) => {
    const res = await deletePost(id);
    const cached = cache.get(url) as Post[];

    mutate(
      cached.filter(item => item.id !== id),
      false
    );

    console.log(`Post with ID ${id} was removed!`);
  };

  const updatePost = async (post: Post) => {
    const res = await putPost(post);
    const cached = cache.get(url) as Post[];

    mutate(
      cached.map(item => (item.id === post.id ? post : item)),
      false
    );

    console.log(`Post with ID ${post.id} was updated!`);
  };

  const getAllPosts = async () => {
    const res = await getPosts({});

    mutate([...res.data], false);
  };

  return { data, addPost, updatePost, removePost, getAllPosts };
};
