const axios = require('axios');
const { Dog, Temperament } = require('../db');
const { Op } = require('sequelize');
const dogPusher = require('../helpers/dogPusher');
require('dotenv').config();
const { BASE_URL, API_KEY } = process.env;

//agrgar apikey
//si no se encuentra ahi tampoco devolver error

//tengo que agregar los perros no superponerlos

const getDogsByBreed = async (breed) => {
  const dogs = [];

  const sqlDogs = await Dog.findAll({
    where: {
      name: {
        [Op.like]: `%${breed}%`,
      },
    },
    include: Temperament,
  });
  dogPusher(sqlDogs, dogs);

  // console.log(`${BASE_URL}/search?q=${breed}?api_key=${API_KEY}`);

  const { data: apiDogs } = await axios(`${BASE_URL}/search?q=${breed}`);
  dogPusher(apiDogs, dogs);

  if (!dogs.length) throw Error('No se encontro esa raza de perros');

  return dogs;
};

module.exports = { getDogsByBreed };
