import * as constants from '../constants';
import * as lodash from 'lodash';

export interface PostData extends lodash.List<{}> {
  id: number;
  slug: string;
}

export interface PostsReturnAction {
  type: string;
  payload: {
    data: Array<PostData>;
  };
}

export default function(state: object = {}, action: PostsReturnAction) {
  switch (action.type) {
    case constants.FETCH_POSTS:
      return lodash.mapKeys(action.payload.data, 'slug');
    case constants.FETCH_POST:
      return {
        ...state,
        [action.payload.data[0].slug]: action.payload.data[0],
      };
    default:
      return state;
  }
}
