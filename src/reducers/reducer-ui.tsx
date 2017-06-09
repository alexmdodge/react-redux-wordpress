import * as Actions from '../constants/constants-actions';
import * as lodash from 'lodash';

export interface UIData extends lodash.List<{}> {
}

export interface UIReturnAction {
  type: any;
}

export default function(state: object = {}, action: UIReturnAction) {
  switch (action.type) {
    case Actions.FETCH_MEDIA:
      return state;
    default:
      return state;
  }
}
