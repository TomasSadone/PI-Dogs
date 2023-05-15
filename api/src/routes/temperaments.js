const { Router } = require('express');
const getTemperaments = require('../controllers/getTemperaments');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const temperaments = await getTemperaments();
    // console.log(temperaments);
    return res.status(200).json(temperaments);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
