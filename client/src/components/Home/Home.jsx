import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharacters, getTemperaments } from '../../redux/actions';
import { Cards } from '../Cards/Cards';
import { sliceIntoPages } from '../../helpers/sliceIntoPages';
import axios from 'axios';

const searchValidation = (search) => {
  let typeOfSearch;
  if (/^\d+$/.test(search)) {
    typeOfSearch = 'numbers';
  } else if (/^[a-zA-Z\s]+$/.test(search)) {
    typeOfSearch = 'letters';
  } else {
    typeOfSearch = 'error';
    console.log('error');
  }
  return typeOfSearch;
};

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCharacters());
    dispatch(getTemperaments());
  }, [dispatch]);

  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  //siempre tiene que estar la pagina que se muestra
  const [shownDogs, setShownDogs] = useState([]);
  const [searchPages, setSearchPages] = useState([]);
  const [existingSearch, setExistingSearch] = useState(false);
  const [dogSearch, setDogSearch] = useState('');
  const { allDogs, temperaments } = useSelector((state) => state);

  //lo que voy a necesitar que se acutalice es pages.
  //lo creo en estado global, y cada vez que lo actualicé aca voy a tener que cambiarlo a un dispatch

  //no seria necesario porque pages se va a actualizar cada vez que el componente se monte, con la nueva
  //lamada a la api en el useeffect
  const pages = sliceIntoPages(allDogs, 8);

  /*
    UNA funcion que sea handleFilters, que se ejecute cuando se aplica/quita uno
    que modifique en pages, y que haga una copia del arr en otro state.
    La misma funcion para order tambien
    Y que actualice shownDogs.
    SOLO actualizar el array de copia, si no estamos teniendo ningun filtrado ni 
    ningun order al momento de hacerla.
    Esto de si tenemos filtrado/order lo vamos a tener que saver con un state,
    porque tambien lo vamos a necesitar para aplicar los filtros

    tipo el state filters: {
      order: A,
      userCreated: false,
      temperaments: []
    }
    Y si todo esto esta asi al momento de llamar handleFilters, se modifica el arr de copia.
    Si hay algo distinto, el arr de copia es al que tendriamos que volver y no se deberia 
    realizar otro.
  */

  const handleDisable = () => {
    if (existingSearch) {
      return searchPages.length === page && true;
    } else {
      return pages.length === page && true;
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setDogSearch(value);
    if (!value.length) {
      setShownDogs(pages[page - 1]);
    } else {
      searchAPI(value);
    }
  };

  useEffect(() => {
    if (allDogs.length) {
      if (!dogSearch.length) {
        setShownDogs(pages[page - 1]);
        setLoading(false);
      } else {
        if (searchValidation(dogSearch) !== 'numbers') {
          setShownDogs(searchPages[page - 1]);
        }
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDogs, page]);

  useEffect(() => {
    if (!dogSearch.length) {
      setExistingSearch(false);
    } else {
      setExistingSearch(true);
    }
  }, [dogSearch]);

  const searchAPI = async (search) => {
    try {
      const typeOfSearch = searchValidation(search);
      if (typeOfSearch === 'letters') {
        const response = await axios.get(`http://localhost:3001/dogs`, {
          params: { breed: search },
        });
        // Actualizar los resultados de búsqueda
        const searchPagesToSet = sliceIntoPages(response.data, 8);
        /*
        por ejemplo if (filter) const filteredpages = filternoseque(searchPages)
        */
        setSearchPages(searchPagesToSet);
        setPage(1);
        setShownDogs(searchPagesToSet[0]);
      }
      if (typeOfSearch === 'numbers') {
        const response = await axios(`http://localhost:3001/dogs/${search}`);
        setSearchPages(response.data);
        setPage(1);
        setShownDogs(response.data);
        // Actualizar los resultados de búsqueda
        // setShownDogs(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <div className='hero'>
        <img src='' alt='perro de fondo' />
        <h2>¿Estás en búsqueda de un amigo peludito?</h2>
        <p>¡Conoce todo sobre razas de perros en Doggypedia!</p>
      </div>
      <div>
        {/* El de h2 ysearchbar */}
        <div>
          <h2>Encuentra a tu compañero ideal:</h2>
          <form action=''>
            <input
              onChange={handleChange}
              value={dogSearch}
              placeholder='Buscar...'
              type='text'
            />
          </form>
        </div>
        {/* El de filtros y order */}
        <div>
          <select name='temperaments' id=''>
            {temperaments.map((temperament) => (
              <option key={temperament.id}>{temperament.name}</option>
            ))}
          </select>
          <select name='user-created' id=''></select>
        </div>
        <Cards shownDogs={shownDogs} loading={loading} />
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          {'<'}
        </button>
        <span>{page}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={handleDisable()}
          // disabled={page === pages.length}
        >
          {'>'}
        </button>
      </div>
    </main>
  );
};
