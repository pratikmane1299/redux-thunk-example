import { useEffect } from 'react';

import Post from './Post';

const Posts = ({ posts, loading, error, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  const renderPosts = () => {
    if (loading) return <span className="loading">Loading...</span>
    if (error) return <span>Could not fetch posts !!!</span>
    return posts.map(post => <Post key={post.id} post={post} />);
  };

  return (
    <div className="posts-container">
      {renderPosts()}
    </div>
  );
};

export default Posts;
