import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Card = ({ dog }) => {
  const { id, name, image, weight, user_created, temperament } = dog;
  const navigate = useNavigate();
  return (
    <div>
      {/* agregar img por defecto o un mensaje */}
      {image && (
        <img
          style={{ height: '300px', width: '300px' }}
          src={image.url ? image.url : image}
          alt={`${name}`}
        />
      )}
      <h2>{name}</h2>
      <span>{`Peso ${weight.metric} kg`}</span>
      <p>{`Este perro es: ${
        user_created ? temperament.map((t) => t.name).join(', ') : temperament
      }`}</p>
      <button onClick={() => navigate(`/dog/${id}`)}>Ver más</button>
    </div>
  );
};
