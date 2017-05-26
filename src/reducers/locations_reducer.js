import _ from 'lodash';
import {
  FETCH_LOCATIONS,
} from '../actions/locations/types';
import defaultLocations from './default_locations';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return defaultLocations();
  }

  return state;
}
