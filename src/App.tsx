import React, { useState } from 'react';

import { FilterOptions, usePosts } from './hooks/posts/usePosts';

function App() {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({ _limit: 5 });

  const { data: posts, addPost, updatePost, removePost, getAllPosts } = usePosts(filterOptions);

  const createPost = () => {
    addPost({
      userId: 1,
      title: 'New York Times Post',
      body:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi eius, aspernatur corrupti dicta in!'
    });
  };

  const editPost = () => {
    updatePost({
      id: 1,
      userId: 1,
      title: 'Edited Post',
      body: 'Lorem, ipsum dolor sit amet!'
    });
  };

  const deletePost = () => {
    removePost(1);
  };

  console.log(posts);

  return (
    <div>
      <button onClick={createPost}>Create Post</button>
      <button onClick={getAllPosts}>Get All Posts</button>
      <button onClick={editPost}>Edit post</button>
      <button onClick={deletePost}>Delete post</button>
    </div>
  );
}

export default App;
