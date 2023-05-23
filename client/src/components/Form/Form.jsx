import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import validation from '../../helpers/validation';
import { initializeApp } from '../../redux/actions';

export const Form = () => {
  const endpoint = 'http://localhost:3001/dogs';
  const initialState = {
    name: '',
    minHeight: '',
    maxHeight: '',
    minWeight: '',
    maxWeight: '',
    min_life_span: '',
    max_life_span: '',
    temperaments: '',
    image: '',
  };
  const [dogData, setDogData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [postError, setPostError] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);
  const [postProcessing, setPostProcessing] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setDogData({ ...dogData, [event.target.name]: event.target.value });
    setErrors(
      validation({ ...dogData, [event.target.name]: event.target.value }, event)
    );
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setPostProcessing(true);
    const {
      name,
      minHeight,
      maxHeight,
      minWeight,
      maxWeight,
      min_life_span,
      max_life_span,
      temperaments,
      image,
    } = dogData;
    const height = {
      imperial: `${minHeight / 2.54} - ${maxHeight / 2.54}`,
      metric: `${minHeight} - ${maxHeight}`,
    };
    const weight = {
      imperial: `${minWeight * 2.205} - ${maxWeight * 2.205}`,
      metric: `${minWeight} - ${maxWeight}`,
    };
    const dog = {
      name,
      image,
      life_span: `${min_life_span} - ${max_life_span} years`,
      height,
      weight,
      temperaments: temperaments.split(' '),
    };

    try {
      await axios.post(endpoint, dog);
      setDogData(initialState);
      setPostProcessing(false);
      dispatch(initializeApp());
      setPostSuccess(true);
      !postError && setPostError(false);
    } catch (err) {
      setPostError(true);
      setPostProcessing(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setPostSuccess(false);
    }, 3000);
  }, [postSuccess]);

  const disableButton = () => {
    if (Object.keys(errors).length) return true;

    for (const field in dogData) {
      if (dogData[field] === '') return true;
    }
    return false;
  };
  return (
    <div className=''>
      <form className='flow' onSubmit={handleSubmit} action=''>
        <label htmlFor='name'>Raza:</label>
        <input
          value={dogData.name}
          autoComplete='off'
          onChange={handleChange}
          name='name'
          type='text'
        />
        {errors.name && <span>{errors.name}</span>}
        <div>
          <label htmlFor='minHeight'>Altura mínima</label>
          <input
            value={dogData.minHeight}
            autoComplete='off'
            onChange={handleChange}
            name='minHeight'
            type='text'
          />
          <label htmlFor='maxHeight'>Altura máxima</label>
          <input
            value={dogData.maxHeight}
            autoComplete='off'
            onChange={handleChange}
            name='maxHeight'
            type='text'
          />
          {errors.height && <span>{errors.height}</span>}
        </div>
        <div>
          <label htmlFor='minWeight'>Peso mínimo</label>
          <input
            value={dogData.minWeight}
            autoComplete='off'
            onChange={handleChange}
            name='minWeight'
            type='text'
          />
          <label htmlFor='maxWeight'>Peso máximo</label>
          <input
            value={dogData.maxWeight}
            autoComplete='off'
            onChange={handleChange}
            name='maxWeight'
            type='text'
          />
          {errors.weight && <span>{errors.weight}</span>}
        </div>
        <div>
          <label htmlFor='min_life_span'>Expectativa de vida mínima</label>
          <input
            value={dogData.min_life_span}
            autoComplete='off'
            onChange={handleChange}
            name='min_life_span'
            type='text'
          />
          <label htmlFor='max_life_span'>Expectativa de vida máxima</label>
          <input
            value={dogData.max_life_span}
            autoComplete='off'
            onChange={handleChange}
            name='max_life_span'
            type='text'
          />
          {errors.life_span && <span>{errors.life_span}</span>}
        </div>
        <label htmlFor='temperaments'>Temperamentos</label>
        <input
          value={dogData.temperaments}
          autoComplete='off'
          onChange={handleChange}
          name='temperaments'
          type='text'
        />
        {errors.temperaments && <span>{errors.temperaments}</span>}
        <label htmlFor='image'>Imagen:</label>
        <input
          value={dogData.image}
          type='text'
          autoComplete='off'
          onChange={handleChange}
          name='image'
        />
        {errors.image && <span>{errors.image}</span>}

        <button disabled={disableButton()}>Postear perro</button>
        {postProcessing && <span>procesando</span>}
        {postError && <span>Error al postear</span>}
        {postSuccess && <span>Posteo exitoso</span>}
      </form>
    </div>
  );
};
