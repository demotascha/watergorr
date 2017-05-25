import axios from 'axios';
import {
  FETCH_LOCATIONS,
} from './types';

const API_KEY = 'f79c605c-7a45-4c08-84ba-0ac9e3cdbfb3';
const ROOT_URL = `http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=${API_KEY}`;

export function fetchLocations() {
  const url = `${ROOT_URL}&limit=100&offset=0`;
  const request = axios.get(url);

  return {
    type: FETCH_LOCATIONS,
    payload: request
  };
}
