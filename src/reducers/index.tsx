import { combineReducers } from 'redux';
import PostsReducer from './reducer-posts';
import PostFilterReducer from './reducer-post-filter';

const rootReducer = combineReducers({
  posts: PostsReducer,
  ui: combineReducers({
    postsFilter: PostFilterReducer,
  }),
});

export default rootReducer;
