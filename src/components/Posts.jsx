/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/PostsAction';

const Posts = (props) => {

  const handleClick = () => {
    props.dispatch(fetchPosts());
  };

  return (
    <div>
      <button
        type='button'
        onClick={handleClick}
      >
        Cargar Posts
      </button>
      <ul>
        {props.Posts.posts.map((post) => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Posts);
