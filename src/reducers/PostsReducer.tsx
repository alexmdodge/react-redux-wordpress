import * as Actions from '../constants/';
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
    case Actions.FETCH_POSTS:
      return lodash.mapKeys(action.payload.data, 'slug');
    case Actions.FETCH_POST:
      return {
        ...state,
        [action.payload.data[0].slug]: action.payload.data[0],
      };
    default:
      return state;
  }
}
