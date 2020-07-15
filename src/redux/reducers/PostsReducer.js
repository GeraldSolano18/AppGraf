import { FETCH_POST_ERROR, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from '../actions/PostsAction';

const initialState = {
  posts: [],
  isFetching: false,
  error: null,
};

const Posts = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload.posts,
      };
    case FETCH_POST_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    default:
      return state;
  }

};
export default Posts;

