import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './card.module.css';
import defaultImage from '../../Images/dogs-default.jpg';

export const Card = ({ dog }) => {
  const { id, name, image, weight, user_created, temperament } = dog;

  /* agregar img por defecto o un mensaje */

  const navigate = useNavigate();
  return (
    <div className={`${style.card} flow`}>
      <div className={style.imgContainer}>
        <img
          className={`${style.img} ${!image && style.defaultImage}`}
          src={!image ? defaultImage : image.url ? image.url : image}
          alt={`${name}`}
        />
        {!image && <p className={style.imgText}>IMAGEN NO ENCONTRADA</p>}
      </div>
      <h2>{name}</h2>
      <span className='fw300 colorText'>{`Peso ${weight.metric} kg`}</span>
      <p className={style.temperaments}>
        {temperament
          ? `Este perro es: ${
              user_created
                ? temperament.map((t) => t.name).join(', ')
                : temperament
            }`
          : `No conocemos los temperamentos de este perro`}
      </p>
      <button className='button' onClick={() => navigate(`/dog/${id}`)}>
        Ver más
      </button>
    </div>
  );
};
