import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './detail.module.css';
import { Error } from '../Error/Error';
import { Loading } from '../Loading/Loading';
import { Tags } from '../Tags/Tags';

export const Detail = () => {
  const { id } = useParams();
  const [dog, setDog] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log('probando build');
  const getDog = useCallback(async () => {
    try {
      const { data } = await axios(
        `https://doggypedia-backend.onrender.com/dogs/${id}`
        // `http://localhost:3001/dogs/${id}`
      );
      setDog(data[0]);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, [id]);
  useEffect(() => {
    getDog();
  }, [getDog]);
  return (
    <div className={styles.container}>
      {error && <Error />}
      {loading && <Loading />}
      {!loading && !error && (
        <div className='grid gridAutoColumns gridAutoColumnsItemLarge gap2 mt25 mb25  flow container '>
          {dog.image && (
            <img
              className={styles.img}
              src={dog.image.url ? dog.image.url : dog.image}
              alt={`${dog.name}`}
            />
          )}
          <div className='flow '>
            <h1>{dog.name}</h1>
            <span className='colorText fw300'>{`ID: ${dog.id}`}</span>
            <hr />
            <h2>Temperamento:</h2>
            {dog.temperament ? (
              dog.user_created ? (
                <Tags temperaments={dog.temperament} userCreated={true} />
              ) : (
                <Tags
                  temperaments={dog.temperament.split(', ')}
                  userCreated={false}
                />
              )
            ) : (
              `No conocemos los temperamentos de este perro`
            )}
            <div className='flex mt25'>
              <img src='PI-Dogs/uil_weight.svg' alt='' />
              <span className='fwSmall colorText'>{`Entre ${dog.weight.metric} kg`}</span>
            </div>
            <div className='flex mt2'>
              <img src='PI-Dogs/ritmo-cardiaco.svg' alt='' />
              <span className='fwSmall colorText'>{`${dog.life_span}`}</span>
            </div>
            <div className='flex mt2'>
              <img src='PI-Dogs/height.svg' alt='' />
              <span className='fwSmall colorText'>{`Entre ${dog.height.metric} cm`}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
