import axios from 'axios';
import {
  SET_ALL_DOGS,
  GET_ALL_TEMPS,
  SET_DOGS_PAGES,
  SET_NEXT_PAGE,
  SET_PREV_PAGE,
  SET_PAGE_TO_ONE,
  SET_SEARCH,
} from './action-types';
import { sliceIntoPages } from '../helpers/sliceIntoPages';

const endpoint = 'https://doggypedia-backend.onrender.com';
// const endpoint = 'http://localhost:3001';
// Acción para obtener los perros desde la API
export const getAllDogs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${endpoint}/dogs`);
      return dispatch({
        type: SET_ALL_DOGS,
        payload: data,
      }); // Llama a la acción para almacenar los perros en el estado
    } catch (error) {
      console.error('Error fetching dogs:', error);
    }
  };
};

// Acción para almacenar los perros en el estado
export const setAllDogs = (dogs) => {
  return {
    type: SET_ALL_DOGS,
    payload: dogs,
  };
};

// Acción para derivar las páginas de perros
export const setDogPages = (pages) => {
  return {
    type: SET_DOGS_PAGES,
    payload: pages,
  };
};

// Dispatcher que combina las dos acciones anteriores
export const initializeApp = () => {
  return async (dispatch, getState) => {
    const allDogs = await dispatch(getAllDogs());
    if (allDogs) {
      const dogPages = sliceIntoPages(allDogs.payload);
      dispatch(setDogPages(dogPages));
    }
    dispatch(getTemperaments());
  };
};

export const getTemperaments = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${endpoint}/temperaments`);
      return dispatch({
        type: GET_ALL_TEMPS,
        payload: data,
      });
    } catch (error) {}
  };
};

export const setSearch = (search) => {
  console.log(search);
  return {
    type: SET_SEARCH,
    payload: search,
  };
};

export const setNextPage = () => ({ type: SET_NEXT_PAGE });
export const setPrevPage = () => ({ type: SET_PREV_PAGE });
export const setPageToOne = () => ({ type: SET_PAGE_TO_ONE });
