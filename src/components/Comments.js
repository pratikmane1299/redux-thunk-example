import { useEffect } from "react";

import Comment from './Comment';

const Comments = ({ match, comments, loading, error, getComments }) => {
  const { id } = match.params;
  useEffect(() => {
    getComments(id);
  }, [getComments, id]);

  const rednerComments = () => {
    if (loading) return <span className="loading">Loading...</span>
    if (error) return <span>Could not fetch posts !!!</span>
    return comments.map(comment => <Comment key={comment.id} comment={comment} />);
  }

  return (
    <div className="comments-container">
      <h3 className="comment-heading">Comments</h3>
      <hr />
      {rednerComments()}
    </div>
  );
};

export default Comments;
