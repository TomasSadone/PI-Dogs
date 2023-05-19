import React from 'react';

export const Cards = ({ shownDogs, loading }) => {
  //con loading mostrar 8 loadingCards
  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>{shownDogs.map((dog) => dog.name)}</div>
      )}
    </div>
  );
};
