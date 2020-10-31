import {
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS
} from "../actions/postsActions";

const initialState = {
  data: [],
  loading: false,
  error: false
}

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        loading: true
      };
    case FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }
  
    default:
      return state;
  }
}
