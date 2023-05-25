const axios = require('axios');
const { Temperament } = require('../db');

let counter = 0;

const getTemperamentsFirstTime = async () => {
  const temperaments = [];
  const { data: breeds } = await axios('https://api.thedogapi.com/v1/breeds');
  //create an array of every temperament we get
  const rawTemperaments = breeds.map((breed) => breed.temperament);
  //rawTemperaments = ['stubborn,happy' , 'familiy friendly, quiet']
  //cure those temperaments, since they are repeated and on strings of multiple ones
  rawTemperaments.forEach((rawTemperament) => {
    // rawTemperament = 'stubborn, happy'
    if (!rawTemperament) return;

    const arrOfRawTemps = rawTemperament.split(',').map((temp) => temp.trim());
    // arrOfRawTemps = [stubborn, happy]
    arrOfRawTemps.forEach((rawTemperament) => {
      if (!temperaments.find((temperament) => temperament === rawTemperament)) {
        temperaments.push(rawTemperament);
      }
    });
  });
  return temperaments;
};

const getTemperaments = async () => {
  //add Temperaments from API to SQL only in first call
  if (counter === 0) {
    console.log('first');
    counter++;
    const temperaments = await getTemperamentsFirstTime();
    await Promise.all(
      temperaments.map(async (temperament) => {
        await Temperament.create({ name: temperament });
      })
    );

    // return temperaments;
  }
  const temperaments = await Temperament.findAll({
    order: [['name', 'ASC']],
  });
  return temperaments;
};

module.exports = getTemperaments;
