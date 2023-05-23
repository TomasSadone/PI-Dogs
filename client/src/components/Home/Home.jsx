import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cards } from '../Cards/Cards';
import { Pagination } from '../Pagination/Pagination';
import { Search } from '../Search/Search';
import { Filters } from '../Filters/FIlters';
import { initializeApp } from '../../redux/actions';

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  const { dogPages } = useSelector((state) => state);

  const [error, setError] = useState({ error: false, message: '' });
  const [loading, setLoading] = useState(true);

  return (
    <main>
      <div className='hero'>
        <img src='' alt='perro de fondo' />
        <h2>¿Estás en búsqueda de un amigo peludito?</h2>
        <p>¡Conoce todo sobre razas de perros en Doggypedia!</p>
      </div>
      <Search setError={setError} setLoading={setLoading} />
      {/* componente filters, recibe setError*/}
      <Filters setError={setError} setLoading={setLoading} />

      <Cards loading={loading} error={error} />
      {dogPages.length > 1 ? <Pagination /> : null}
    </main>
  );
};
