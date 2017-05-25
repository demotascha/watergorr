import _ from 'lodash';
import {
  FETCH_LOCATIONS,
} from '../actions/locations/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return action.payload;
  }

  return state;
}
