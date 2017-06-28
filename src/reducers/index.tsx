import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import MediaReducer from './MediaReducer';
import AuthReducer from './AuthReducer';
import PostFiltersReducer from './PostFiltersReducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  media: MediaReducer,
  ui: combineReducers({
    postFilters: PostFiltersReducer,
  }),
  auth: AuthReducer,
});

export default rootReducer;
