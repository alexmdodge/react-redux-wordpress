import { DispatchUpdatePostRange, UPDATE_POST_RANGE } from '../constants/constants-actions';

export default function(state: object = {}, action: DispatchUpdatePostRange) {
  switch (action.type) {
    case UPDATE_POST_RANGE:
      return state;
    default:
      return state;
  }
}