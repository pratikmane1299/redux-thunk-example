const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <h4 className="author">{comment.name}</h4>
      <p className="comment-body">{comment.body}</p>
    </div>
  );
};

export default Comment;
