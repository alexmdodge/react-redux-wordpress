import * as Actions from '../constants';
import * as moment from 'moment';

export interface UpdateRangeReturnAction {
  type: string;
  payload: any;
}

// postsRange is subset of validMonths
const defaultFilterState = {
  postsRange: {
    min: 0, 
    max: Date.now(),
  },
  validMonths: {
    min: Date.now(),
    max: Date.now(),
  },
};

export default function(state: any = defaultFilterState, action: UpdateRangeReturnAction) {
  switch (action.type) {
    case Actions.UPDATE_POSTS_RANGE:
      const min = moment(action.payload).startOf('month').format('x');
      const max = moment(action.payload).endOf('month').format('x');
      return {
        ...state,
        postsRange: { min, max }
      };
    case Actions.UPDATE_VALID_MONTHS:
      const newState = {
        ...state,
        validMonths: {
          ...state.validMonths,
          min: action.payload,
        }
      };
      return newState;
    default:
      return state;
  }
}