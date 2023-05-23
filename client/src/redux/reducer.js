// import types
import {
  SET_ALL_DOGS,
  GET_ALL_TEMPS,
  SET_DOGS_PAGES,
  SET_NEXT_PAGE,
  SET_PREV_PAGE,
  SET_PAGE_TO_ONE,
  SET_SEARCH,
} from './action-types';

const initialState = {
  allDogs: [],
  dogPages: [],
  temperaments: [],
  currentPage: 1,
  search: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
      };
    case SET_DOGS_PAGES:
      return {
        ...state,
        dogPages: action.payload,
      };
    case GET_ALL_TEMPS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case SET_NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case SET_PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case SET_PAGE_TO_ONE:
      return {
        ...state,
        currentPage: 1,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};
