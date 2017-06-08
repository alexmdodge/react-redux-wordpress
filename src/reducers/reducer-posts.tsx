import * as constants from '../constants';
import * as lodash from 'lodash';

export interface PostData extends lodash.List<{}> {
  id: number;
}

export interface PostsReturnAction {
  type: string;
  payload: {
    data: PostData;
  };
}

export default function(state: object = {}, action: PostsReturnAction) {
  switch (action.type) {
    case constants.FETCH_POSTS:
      return lodash.mapKeys(action.payload.data, 'id');
    case constants.FETCH_POST:
      return {
        ...state,
        [action.payload.data.id]: action.payload.data,
      };
    default:
      return state;
  }
}
