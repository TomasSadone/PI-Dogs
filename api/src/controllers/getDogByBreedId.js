const { getDogs } = require('./getDogs');
require('dotenv').config();

const getDogByBreedId = async (breedId) => {
  const dogs = await getDogs();
  const dog = dogs.find((dog) => dog.id === +breedId);
  console.log(dog);
  if (!dog) throw Error('No se encontro un perro con ese ID');
  return dog;
};

module.exports = { getDogByBreedId };
