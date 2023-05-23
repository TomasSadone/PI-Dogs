import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageToOne, setSearch } from '../../redux/actions';
import styles from './search.module.css';

const endpoint = 'http://localhost:3001/dogs';

export const Search = ({ setError, setLoading }) => {
  //para validar el campo
  const [searchError, setSearchError] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [existingSearch, setExistingSearch] = useState(false);

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
    dispatch(setPageToOne());
    dispatch(setSearch([]));
  };

  return (
    <div className={`${styles.search}`}>
      <label className={styles.label}>Encuentra a tu compañero ideal:</label>
      <form className={styles.form} onSubmit={handleSubmit} action=''>
        <input
          placeholder='Buscar...'
          className={'input'}
          value={inputValue}
          onChange={handleInputChange}
          type='text'
        />
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
