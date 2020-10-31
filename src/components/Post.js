const Post = ({ post }) => {
  return (
    <div className="post" key={post.id}>
      <h3 className="post-title">{post.title}</h3>
      <p className="post-body">{post.body}</p>
    </div>
  );
};

export default Post;
