import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import MediaReducer from './MediaReducer';
import PostFiltersReducer from './PostFiltersReducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  media: MediaReducer,
  ui: combineReducers({
    postFilters: PostFiltersReducer,
  }),
});

export default rootReducer;
