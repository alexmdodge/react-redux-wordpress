import * as Actions from '../constants/';
import * as lodash from 'lodash';

export default function(state: object = {}, action: any) {
  switch (action.type) {
    case Actions.FETCH_POSTS:
      return lodash.mapKeys(action.payload.data, 'slug');
    default:
      return state;
  }
}
