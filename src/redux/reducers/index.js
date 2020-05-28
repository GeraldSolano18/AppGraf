import { combineReducers } from 'redux';
import LoginOut from './LoginOutReducer';
import CstdReducer from './CstdReducer';
import Chart from './ChartReducer';

export default combineReducers({
  LoginOut,
  CstdReducer,
  Chart,
});
