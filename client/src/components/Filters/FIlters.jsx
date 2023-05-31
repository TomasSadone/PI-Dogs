import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sliceIntoPages } from '../../helpers/sliceIntoPages';
import { setDogPages, setPageToOne } from '../../redux/actions';
import style from './filters.module.css';

export const Filters = ({ setError, setLoading }) => {
  const { allDogs, temperaments, search } = useSelector((state) => state);
  const [filters, setFilters] = useState({
    temperaments: 'Todos',
    user_created: 'Todos',
    order: 'Alfabetico ascendente',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line
  }, [search, allDogs]);

  const handleFiltersChange = (event) => {
    const currentState = {
      ...filters,
      [event.target.name]: event.target.value,
    };
    setFilters(currentState);
    applyFilters(currentState);
  };

  const applyFilters = (currentState = filters) => {
    //no desestructurar temperaments pq esta el que viene de redux
    const { user_created, order } = currentState;

    let filteredDogs = search.length ? search : allDogs;
    filteredDogs.length && setLoading(false);

    if (currentState.temperaments !== 'Todos') {
      filteredDogs = filteredDogs.filter((dog) => {
        if (!dog.temperament) return false;

        if (dog.user_created) {
          return dog.temperament.some(
            (temperament) => temperament.name === currentState.temperaments
          );
        }
        return dog.temperament
          .toLowerCase()
          .includes(currentState.temperaments.toLowerCase());
      });
    }

    if (user_created !== 'Todos') {
      if (user_created) {
        filteredDogs = filteredDogs.filter((dog) => dog.user_created);
      } else {
        filteredDogs = filteredDogs.filter((dog) => !dog.user_created);
      }
    }

    if (order === 'Alfabetico ascendente') {
      filteredDogs.sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
    } else if (order === 'Alfabetico descendente') {
      filteredDogs.sort((a, b) =>
        b.name.toLowerCase().localeCompare(a.name.toLowerCase())
      );
    } else if (order === 'Peso ascendente') {
      filteredDogs.sort((a, b) => {
        const weightA = parseInt(a.weight.metric.split(' ')[0]);
        const weightB = parseInt(b.weight.metric.split(' ')[0]);

        if (weightA < weightB) {
          return -1;
        }
        if (weightA > weightB) {
          return 1;
        }
        return 0;
      });
    } else if (order === 'Peso descendente') {
      filteredDogs.sort((a, b) => {
        const weightA = parseInt(a.weight.metric.split(' ')[0]);
        const weightB = parseInt(b.weight.metric.split(' ')[0]);

        if (weightA > weightB) {
          return -1;
        }
        if (weightA < weightB) {
          return 1;
        }
        return 0;
      });
    }
    allDogs.length && !filteredDogs.length
      ? setError({
          error: true,
          message: 'No hay perros que coincidan con tu busqueda',
        })
      : setError({
          error: false,
          message: '',
        });
    const filteredPages = sliceIntoPages(filteredDogs);
    dispatch(setPageToOne());
    dispatch(setDogPages(filteredPages));
  };

  return (
    <div className={style.layout}>
      <div className={style.filters}>
        <div className='grid'>
          <label className='fw500 ' htmlFor='temperament'>
            Filtrar por temperamento
          </label>
          <select
            className='fsSmall colorText select'
            placeholder='Temperamento'
            value={filters.temperaments}
            onChange={handleFiltersChange}
            name='temperaments'
            id=''
          >
            <option>Todos</option>
            {temperaments.map((temperament) => (
              <option value={temperament.name} key={temperament.id}>
                {temperament.name}
              </option>
            ))}
          </select>
        </div>
        <div className='grid'>
          <label className='fw500 ' htmlFor='user_created'>
            Filtrar segun origen
          </label>
          <select
            className='fsSmall colorText select'
            value={filters.user_created}
            onChange={handleFiltersChange}
            name='user_created'
            id=''
          >
            <option value='Todos'>Todos</option>
            <option value='false'>Base de datos</option>
            <option value='true'>Creados por el usuario</option>
          </select>
        </div>
      </div>
      <div className='grid'>
        <label className='fw500 ' htmlFor='alphabeticOrder'>
          Orden
        </label>
        <select
          className='fsSmall colorText select'
          onChange={handleFiltersChange}
          name='order'
          id=''
        >
          <option value='Alfabetico ascendente'>Alfabetico ascendente</option>
          <option value='Alfabetico descendente'>Alfabetico descendente</option>
          <option value='Peso ascendente'>Peso ascendente</option>
          <option value='Peso descendente'>Peso descendente</option>
        </select>
      </div>
    </div>
  );
};
