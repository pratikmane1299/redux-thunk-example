import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_SUCCESS
} from "../actions/commentsAction";

const initialState = {
  data: [],
  loading: false,
  error: false
}

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        loading: true
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }
  
    default:
      return state;
  }
}
