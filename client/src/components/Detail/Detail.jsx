import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Detail = () => {
  const { id } = useParams();
  const [dog, setDog] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const getDog = useCallback(async () => {
    try {
      const { data } = await axios(`http://localhost:3001/dogs/${id}`);
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
    <div>
      {error && <div>error component</div>}
      {loading && <div>loading component</div>}
      {!loading && !error && (
        <div className='flow'>
          {dog.image && (
            <img
              style={{ height: '300px', width: '300px' }}
              src={dog.image.url ? dog.image.url : dog.image}
              alt={`${dog.name}`}
            />
          )}
          <h1>{dog.name}</h1>
          <span>{dog.id}</span>
          <hr />
          <h2>Temperamento:</h2>
          {dog.user_created
            ? dog.temperament.map((temp) => (
                <span key={temp.name}>{temp.name}</span>
              ))
            : dog.temperament
                .split(' ')
                .map((temp) => <span key={temp}>{temp}</span>)}
          <h2>Descripción:</h2>
        </div>
      )}
    </div>
  );
};
