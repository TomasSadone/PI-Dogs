const axios = require('axios');
require('dotenv').config();
const { BASE_URL, API_KEY } = process.env;
const { Dog, Temperament } = require('../db');
const dogPusher = require('../helpers/dogPusher');

const getDogs = async () => {
  const dogs = [];
  const sqlDogs = await Dog.findAll({
    include: { model: Temperament, as: 'temperament' },
  });
  const { data: apiDogs } = await axios(`${BASE_URL}`);
  dogPusher(sqlDogs, dogs);
  dogPusher(apiDogs, dogs);
  dogs.sort((a, b) => {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return dogs;
};

module.exports = {
  getDogs,
};
