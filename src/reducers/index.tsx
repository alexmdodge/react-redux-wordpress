import { combineReducers } from 'redux';
import PostsReducer from './reducer-posts';
import MediaReducer from './reducer-media';
import PostFilterReducer from './reducer-post-filter';

const rootReducer = combineReducers({
  posts: PostsReducer,
  media: MediaReducer,
  ui: combineReducers({
    postsFilter: PostFilterReducer,
  }),
});

export default rootReducer;
