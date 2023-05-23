import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cards } from '../Cards/Cards';
import { Pagination } from '../Pagination/Pagination';
import { Search } from '../Search/Search';
import { Filters } from '../Filters/FIlters';
import { initializeApp } from '../../redux/actions';
import styles from './home.module.css';

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  const { dogPages } = useSelector((state) => state);

  const [error, setError] = useState({ error: false, message: '' });
  const [loading, setLoading] = useState(true);

  return (
    <main className='flow '>
      <div className='imgContainer'>
        <img
          className={`${styles.homeHeroImg} heroImg`}
          src='/bg-landing.png'
          alt='perro de fondo'
        />
        <div className='heroContent  textAlignCenter flow colorTitlesWhite'>
          <h2>¿Estás en búsqueda de un amigo peludito?</h2>
          <p>¡Conoce todo sobre razas de perros en Doggypedia!</p>
        </div>
      </div>
      <div className='container mt1 flow'>
        <Search setError={setError} setLoading={setLoading} />
        {/* componente filters, recibe setError*/}
        <Filters setError={setError} setLoading={setLoading} />

        <Cards loading={loading} error={error} />
        {dogPages.length > 1 ? <Pagination /> : null}
      </div>
    </main>
  );
};
