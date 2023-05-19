import axios from 'axios';
import { GET_ALL_DOGS, GET_ALL_TEMPS, SET_SHOWN_DOGS } from './action-types';

const endpoint = 'http://localhost:3001';
export const getAllCharacters = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${endpoint}/dogs`);
      return dispatch({
        type: GET_ALL_DOGS,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
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
