import * as constants from '../constants';
import * as lodash from 'lodash';

export interface PostsReturnAction {
  type: constants.FETCH_POSTS;
  payload: {
    data: lodash.List<{}>;
  };
}

export default function(state: object = {}, action: PostsReturnAction) {
  switch (action.type) {
    case constants.FETCH_POSTS:
      return lodash.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
