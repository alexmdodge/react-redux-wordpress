import { DispatchUpdatePostsRange, UPDATE_POSTS_RANGE } from '../constants/constants-actions';

// postsRange is subset of validMonths
const defaultFilterState = {
  postsRange: {
    min: 0, 
    max: Date.now(),
  },
  validMonths: {
    min: 0,
    max: Date.now(),
  },
};

export default function(state: object = defaultFilterState, action: DispatchUpdatePostsRange) {
  switch (action.type) {
    case UPDATE_POSTS_RANGE:
      return state;
    default:
      return state;
  }
}