import { combineReducers } from 'redux';
import PostsReducer from './reducer-posts';
import MediaReducer from './reducer-media';

const rootReducer = combineReducers({
  posts: PostsReducer,
  media: MediaReducer,
});

export default rootReducer;
