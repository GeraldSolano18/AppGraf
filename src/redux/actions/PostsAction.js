export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

export const fetchPosts = () => (dispatch) => {

  dispatch({
    type: FETCH_POST_REQUEST,
  });

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) => {
      dispatch({
        type: FETCH_POST_SUCCESS,
        payload: {
          posts,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_POST_ERROR,
        error: error.toString(),
      });
    });

};
