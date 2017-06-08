import * as constants from '../constants';
import * as lodash from 'lodash';

export interface MediaData extends lodash.List<{}> {
  id: number;
  slug: string;
}

export interface PostsReturnAction {
  type: string;
  payload: {
    data: MediaData;
  };
}

export default function(state: object = {}, action: PostsReturnAction) {
  switch (action.type) {
    case constants.FETCH_MEDIA:
      console.log(action);
      return lodash.mapKeys(action.payload.data, 'slug');
    default:
      return state;
  }
}
