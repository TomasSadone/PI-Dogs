import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../Card/Card';

export const Cards = ({ error, loading }) => {
  //con loading mostrar 8 loadingCards
  const { dogPages, currentPage } = useSelector((state) => state);
  return (
    <div>
      {error.error && (
        // hacer un h2 que diga Nada por aqui y p que diga prueba realizando otra busqueda o cambiando los filtros. Todo centradito
        <p>error...</p>
      )}
      {loading && 'componente loading'}
      {!loading && !error.error && (
        <div>
          {dogPages[currentPage - 1]
            ? dogPages[currentPage - 1].map((dog) => {
                return <Card key={dog.id} dog={dog} />;
              })
            : null}
        </div>
      )}
    </div>
  );
};
