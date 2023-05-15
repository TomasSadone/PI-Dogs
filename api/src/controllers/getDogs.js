const axios = require('axios');
require('dotenv').config();
const { BASE_URL, API_KEY } = process.env;
const { Dog, Temperament } = require('../db');
const dogPusher = require('../helpers/dogPusher');

const getDogs = async () => {
  const dogs = [];
  const sqlDogs = await Dog.findAll({ include: Temperament });
  const { data: apiDogs } = await axios(`${BASE_URL}`);
  dogPusher(sqlDogs, dogs);
  dogPusher(apiDogs, dogs);
  return dogs;
};

module.exports = {
  getDogs,
};
