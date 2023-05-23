import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDogPages, setPageToOne, setSearch } from '../../redux/actions';
import { sliceIntoPages } from '../../helpers/sliceIntoPages';

const endpoint = 'http://localhost:3001/dogs';

export const Search = ({ setError, setLoading }) => {
  //para validar el campo
  const [searchError, setSearchError] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [existingSearch, setExistingSearch] = useState(false);

  const { allDogs } = useSelector((state) => state);
  const dispatch = useDispatch();

  const searchValidation = (search) => {
    let typeOfSearch;
    if (/^\d+$/.test(search)) {
      typeOfSearch = 'numbers';
      setSearchError(false);
    } else if (/^[a-zA-Z\s]+$/.test(search)) {
      typeOfSearch = 'letters';
      setSearchError(false);
    } else {
      typeOfSearch = 'error';
      setSearchError(true);
    }
    return typeOfSearch;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setExistingSearch(true);

    const { value } = event.target[0];
    const typeOfSearch = searchValidation(value);

    if (typeOfSearch === 'numbers') {
      setLoading(true);
      setError({ error: false, message: '' });
      try {
        const { data } = await axios(`${endpoint}/${value}`);
        dispatch(setPageToOne());
        // dispatch(setDogPages([data]));
        dispatch(setSearch(data));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError({ error: true, message: error.message });
      }
    } else if (typeOfSearch === 'letters') {
      setLoading(true);
      setError({ error: false, message: '' });
      try {
        const { data } = await axios.get(endpoint, {
          params: { breed: value },
        });
        const paginatedDogs = sliceIntoPages(data);
        dispatch(setPageToOne());
        dispatch(setSearch(data));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError({ error: true, message: error.message });
      }
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteSearch = () => {
    setExistingSearch(false);
    setInputValue('');
    setError({ error: false, message: '' });
    const pages = sliceIntoPages(allDogs);
    dispatch(setPageToOne());

    // dispatch(setDogPages(pages));
    dispatch(setSearch([]));
  };

  return (
    <div>
      <label>Encuentra a tu compañero ideal</label>
      <form onSubmit={handleSubmit} action=''>
        <input value={inputValue} onChange={handleInputChange} type='text' />
      </form>
      {searchError ? (
        <span>La busqueda debe ser de solo letras, o solo numeros</span>
      ) : null}
      {existingSearch ? (
        <button onClick={handleDeleteSearch}>Borrar búsqueda</button>
      ) : null}
    </div>
  );
};
