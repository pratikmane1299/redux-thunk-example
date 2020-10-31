export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const fetchComments = () => {
  return {
    type: FETCH_COMMENTS,
  }
}

export const fetchCommentsSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments
  }
}

export const fetchCommentsFailure = () => {
  return {
    type: FETCH_COMMENTS_FAILURE,
  }
}

export const getComments = (postId) => {

  return async (dispatch) => {

    dispatch(fetchComments());
    
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      const comments = await response.json();

      dispatch(fetchCommentsSuccess(comments));

    } catch {
      dispatch(fetchCommentsFailure());
    }
  }
}
