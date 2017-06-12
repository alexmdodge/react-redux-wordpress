import { combineReducers } from 'redux';
import PostsReducer from './reducer-posts';
import MediaReducer from './reducer-media';
import PostRangeReducer from './reducer-post-range';

const rootReducer = combineReducers({
  posts: PostsReducer,
  media: MediaReducer,
  ui: combineReducers({
    postRange: PostRangeReducer,
  }),
});

export default rootReducer;
