import * as constants from '../constants';
import * as lodash from 'lodash';

export interface MediaData extends lodash.List<{}> {
  id: number;
  slug: string;
}

export interface PostsReturnAction {
  type: string;
  payload: {
    slug: string,
    media: {
      data: MediaData;
    };
  };
}

export default function(state: object = {}, action: PostsReturnAction) {
  switch (action.type) {
    case constants.FETCH_MEDIA:
      return {
        ...state,
        [action.payload.slug]: action.payload.media.data,
      };
    default:
      return state;
  }
}
