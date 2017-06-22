import * as Actions from '../constants/';
import * as lodash from 'lodash';

export default function(state: object = {}, action: any) {
  switch (action.type) {
    case Actions.FETCH_MEDIA:
      return lodash.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}