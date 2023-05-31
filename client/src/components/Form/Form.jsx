import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import validation from '../../helpers/validation';
import { initializeApp } from '../../redux/actions';
import styles from './form.module.css';
import { getTemperaments } from '../../redux/actions';
import { Tag } from '../Tag/Tag';
import { Tags } from '../Tags/Tags';

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
    image: '',
  };
  const [dogData, setDogData] = useState(initialState);
  const [selectedTemperaments, setSelectedTemperaments] = useState([]);
  const [errors, setErrors] = useState({});
  const [postError, setPostError] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);
  const [postProcessing, setPostProcessing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const { temperaments } = useSelector((store) => store);

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
      name: name.toLowerCase(),
      image,
      life_span: `${min_life_span} - ${max_life_span} years`,
      height,
      weight,
      temperaments: selectedTemperaments,
    };

    try {
      await axios.post(endpoint, dog);
      setDogData(initialState);
      setPostProcessing(false);
      dispatch(initializeApp());
      setPostSuccess(true);
      setSelectedTemperaments([]);
      postError && setPostError(false);
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

  const handleSelectChange = (event) => {
    if (
      selectedTemperaments.some(
        (temperament) => temperament === event.target.value
      )
    )
      return;
    setSelectedTemperaments([...selectedTemperaments, event.target.value]);
  };

  return (
    <div className={`container`}>
      <form className='flow' onSubmit={handleSubmit} action=''>
        <div>
          <label htmlFor='name'>Raza:</label>
          <input
            className={`input ${errors.name ? styles.inputError : null}`}
            value={dogData.name}
            autoComplete='off'
            onChange={handleChange}
            name='name'
            type='text'
          />
        </div>
        {errors.name && <span className='errorMessagge'>{errors.name}</span>}
        <div className='grid gap1 gridAutoColumns'>
          <div>
            <label htmlFor='minHeight'>Altura mínima</label>
            <span className='fsXs fw300 colorText'> (cm)</span>
            <input
              className={`input ${errors.height ? styles.inputError : null}`}
              value={dogData.minHeight}
              autoComplete='off'
              onChange={handleChange}
              name='minHeight'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='maxHeight'>Altura máxima</label>
            <span className='fsXs fw300 colorText'> (cm)</span>

            <input
              className={`input ${errors.height ? styles.inputError : null}`}
              value={dogData.maxHeight}
              autoComplete='off'
              onChange={handleChange}
              name='maxHeight'
              type='text'
            />
          </div>
        </div>
        {errors.height && (
          <span className='errorMessagge'>{errors.height}</span>
        )}
        <div className='grid gap1 gridAutoColumns'>
          <div>
            <label htmlFor='minWeight'>Peso mínimo</label>
            <span className='fsXs fw300 colorText'> (kg)</span>
            <input
              className={`input ${errors.weight ? styles.inputError : null}`}
              value={dogData.minWeight}
              autoComplete='off'
              onChange={handleChange}
              name='minWeight'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='maxWeight'>Peso máximo</label>
            <span className='fsXs fw300 colorText'> (kg)</span>
            <input
              className={`input ${errors.weight ? styles.inputError : null}`}
              value={dogData.maxWeight}
              autoComplete='off'
              onChange={handleChange}
              name='maxWeight'
              type='text'
            />
          </div>
        </div>
        {errors.weight && (
          <span className='errorMessagge'>{errors.weight}</span>
        )}
        <div className='grid gap1 gridAutoColumns'>
          <div>
            <label htmlFor='min_life_span'>Expectativa de vida mínima</label>
            <span className='fsXs fw300 colorText'> (años)</span>

            <input
              className={`input ${errors.life_span ? styles.inputError : null}`}
              value={dogData.min_life_span}
              autoComplete='off'
              onChange={handleChange}
              name='min_life_span'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='max_life_span'>Expectativa de vida máxima</label>
            <span className='fsXs fw300 colorText'> (años)</span>
            <input
              className={`input ${errors.life_span ? styles.inputError : null}`}
              value={dogData.max_life_span}
              autoComplete='off'
              onChange={handleChange}
              name='max_life_span'
              type='text'
            />
          </div>
        </div>
        {errors.life_span && (
          <span className='errorMessagge'>{errors.life_span}</span>
        )}
        <div>
          <label htmlFor='temperaments'>Temperamentos</label>
          <select
            className={`${styles.select} fsSmall colorText select`}
            placeholder='Temperamento'
            onChange={handleSelectChange}
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
        <p>Temperamentos seleccionados:</p>
        {!selectedTemperaments.length ? (
          <Tags temperaments={['Seleccionar']} />
        ) : (
          <Tags temperaments={selectedTemperaments} />
        )}
        {errors.temperaments && (
          <span className='errorMessagge'>{errors.temperaments}</span>
        )}
        <div>
          <label htmlFor='image'>Imagen:</label>
          <span className='fsXs fw300 colorText'> (url)</span>
          <input
            className={`input ${errors.image ? styles.inputError : null}`}
            value={dogData.image}
            type='text'
            autoComplete='off'
            onChange={handleChange}
            name='image'
          />
        </div>
        {errors.image && <p className='errorMessagge'>{errors.image}</p>}

        <button className='button mb1' disabled={disableButton()}>
          Postear perro
        </button>
        {postProcessing && (
          <p className='colorText fsLarge fw600'>Procesando...</p>
        )}
        {postError && (
          <p className='errorMessagge fsLarge fw600'>Error al postear</p>
        )}
        {postSuccess && (
          <p className='successMessagge fsLarge fw600'>Posteo exitoso</p>
        )}
      </form>
    </div>
  );
};
