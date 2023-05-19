// import types
import {
  GET_ALL_DOGS,
  // eslint-disable-next-line
  FILTER_BY_TEMPS,
  // eslint-disable-next-line
  FILTER_BY_USER_CREATED,
  // eslint-disable-next-line
  GET_ALL_TEMPS,
  // eslint-disable-next-line
  GET_DOGS_BY_SEARCH,
  // eslint-disable-next-line
  GET_DOG_BY_ID,
  // eslint-disable-next-line
  ORDER_APHABETICALLY,
  // eslint-disable-next-line
  ORDER_BY_WEIGHT,
  // eslint-disable-next-line
  POST_DOG,
  SET_SHOWN_DOGS,
} from './action-types';

const initialState = {
  allDogs: [],
  temperaments: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
      };
    case GET_ALL_TEMPS:
      return {
        ...state,
        temperaments: action.payload,
      };
    default:
      return state;
  }
};
