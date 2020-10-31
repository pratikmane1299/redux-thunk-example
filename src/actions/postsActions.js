export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPosts = () => {
  return {
    type: FETCH_POSTS
  }
}

export const fetchPostsSuccess =  (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  }
}

export const fetchPostsFailure = () => {
  return {
    type: FETCH_POSTS_FAILURE
  }
}

export const getPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPosts());

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();

      dispatch(fetchPostsSuccess(posts));

    } catch {
      dispatch(fetchPostsFailure());
    }
  }
}
