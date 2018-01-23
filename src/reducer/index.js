import { combineReducers } from 'redux';
import message from './message';
import page from './page';

const reducer = combineReducers({
  message,
  page
});

export default reducer;
