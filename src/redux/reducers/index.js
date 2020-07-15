import { combineReducers } from 'redux';
import LoginOut from './LoginOutReducer';
import CstdReducer from './CstdReducer';
import Chart from './ChartReducer';
import Posts from './PostsReducer';

export default combineReducers({
  LoginOut,
  CstdReducer,
  Chart,
  Posts,
});
