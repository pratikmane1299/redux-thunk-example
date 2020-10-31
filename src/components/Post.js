const { Link } = require("react-router-dom")

const Post = ({ post }) => {
  return (
    <div className="post" key={post.id}>
      <h3 className="post-title">{post.title}</h3>
      <p className="post-body">{post.body}</p>
      <Link to={`/${post.id}/comments`} className="view-comments-link">View all comments</Link>
    </div>
  );
};

export default Post;
