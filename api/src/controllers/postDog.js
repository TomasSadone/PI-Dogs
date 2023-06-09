const axios = require('axios');
const { Dog, Temperament } = require('../db');
const { getDogs } = require('./getDogs');
const { BASE_URL, API_KEY } = process.env;

const throwError = () => {
  throw Error('Esa raza ya existe en la base de datos');
};

const postDog = async (
  name,
  image,
  height,
  weight,
  life_span,
  temperaments
) => {
  const { data: apiDogs } = await axios(`${BASE_URL}/search?q=${name}`);

  const id = async () => {
    const apiId = await (await getDogs()).pop().id;
    const res = await Dog.findOne({
      order: [['id', 'DESC']],
    });
    let sqlId;
    if (res) {
      sqlId = res.id;
      const id = Math.max(apiId, sqlId);
      return id + 1;
    }
    return apiId + 1;
  };

  if (apiDogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase()))
    throwError();
  const [dog, created] = await Dog.findOrCreate({
    where: { name: name },
    defaults: {
      name,
      image,
      height,
      weight,
      life_span,
      user_created: true,
      id: await id(),
    },
  });

  if (!created) throwError();

  for (const temperament of temperaments) {
    console.log(temperament);
    const newTemperament = await Temperament.findAll({
      where: { name: temperament },
    });
    console.log(newTemperament);
    await dog.addTemperament(newTemperament);
  }
  return dog;
};

module.exports = { postDog };
