import { combineReducers } from 'redux';
import PostsReducer from './reducer-posts';
import MediaReducer from './reducer-media';
import UIReducer from './reducer-ui';

const rootReducer = combineReducers({
  posts: PostsReducer,
  media: MediaReducer,
  ui: UIReducer,
});

export default rootReducer;
