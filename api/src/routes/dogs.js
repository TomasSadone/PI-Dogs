const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getDogsByBreed } = require('../controllers/getDogsByBreed');
const { getDogs } = require('../controllers/getDogs');
const { getDogByBreedId } = require('../controllers/getDogByBreedId');
const { postDog } = require('../controllers/postDog');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { breed } = req.query;
    if (!breed) {
      const dogs = await getDogs();
      return res.status(200).json(dogs);
    }

    const dogs = await getDogsByBreed(breed);
    return res.status(200).json(dogs);
  } catch (error) {
    console.log(error.message);
    return res.status(404).send(error.message);
  }
});

router.get('/:breedId', async (req, res) => {
  try {
    const { breedId } = req.params;
    if (!breedId) throw Error('Falta informacion obligatoria');

    const dog = await getDogByBreedId(breedId);
    return res.status(200).json(dog);
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, image, height, weight, life_span, temperaments } = req.body;
    if (
      !name ||
      !image ||
      !height ||
      !weight ||
      !life_span ||
      !temperaments.length
    )
      throw Error('Falta informacion esencial');

    const dog = await postDog(
      name,
      image,
      height,
      weight,
      life_span,
      temperaments
    );
    return res.status(200).json(dog);
  } catch (error) {
    return res.status(409).send(error.message);
  }
});

// mover todas a una dog route, por si hubiera otra como login.

module.exports = router;
