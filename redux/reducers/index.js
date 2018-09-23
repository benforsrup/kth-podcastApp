import { combineReducers } from "redux";

import player from './player_reducer'
import comments from './comment_reducer'


export default combineReducers({
  comments,
  player
});