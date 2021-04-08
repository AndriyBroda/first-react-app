import React, { useState } from 'react';

import { FilterOptions, usePosts } from './hooks/posts/usePosts';

function App() {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({ _limit: 5 });

  const { data: posts, addPost, updatePost, removePost } = usePosts(filterOptions);

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

  const getAllPosts = () => {
    setFilterOptions({});
  };

  return (
    <div>
      <button onClick={createPost}>Create Post</button>
      <button onClick={getAllPosts}>Get All Posts</button>
      <button onClick={editPost}>Edit post</button>
      <button onClick={deletePost}>Delete post</button>
      <br />

      {Number(filterOptions._limit) > 0 && (
        <div>
          <button
            onClick={() => setFilterOptions(prev => ({ ...prev, _page: (prev._page || 1) - 1 }))}
            disabled={!filterOptions._page || filterOptions._page <= 1}
          >
            Prev
          </button>
          <span>Page: {filterOptions._page || 1}</span>
          <button onClick={() => setFilterOptions(prev => ({ ...prev, _page: (prev._page || 1) + 1 }))}>
            Next
          </button>
        </div>
      )}

      <input
        type='number'
        value={filterOptions._limit || ''}
        placeholder='Limit'
        onChange={e => setFilterOptions(prev => ({ ...prev, _limit: Number(e.target.value) }))}
      />
      <ul>
        {posts
          ? (posts.length && posts.map(item => <li key={item.id}>{item.body}</li>)) || 'Nothing found!'
          : 'Loading...'}
      </ul>
    </div>
  );
}

export default App;
