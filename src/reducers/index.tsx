import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import PostFilterReducer from './PostsFilterReducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  ui: combineReducers({
    postsFilter: PostFilterReducer,
  }),
});

export default rootReducer;
