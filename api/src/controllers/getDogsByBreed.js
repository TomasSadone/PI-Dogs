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
    include: { model: Temperament, as: 'temperament' },
  });
  dogPusher(sqlDogs, dogs);
  const { data: apiDogs } = await axios(`${BASE_URL}/search?q=${breed}`);
  console.log(apiDogs);
  const dogsToPush = await Promise.all(
    apiDogs.map(async (apiDog) => {
      if (apiDog.reference_image_id) {
        const { data: imgData } = await axios(
          `https://api.thedogapi.com/v1/images/${apiDog.reference_image_id}`
        );
        return {
          ...apiDog,
          image: {
            url: imgData.url,
          },
        };
      }
      return apiDog;
    })
  );
  console.log('first');
  console.log(dogsToPush);

  dogPusher(dogsToPush, dogs);

  if (!dogs.length) throw Error('No se encontro esa raza de perros');

  return dogs;
};

module.exports = { getDogsByBreed };
