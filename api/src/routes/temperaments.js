const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const temperaments = await getTemperaments();
  } catch (error) {}
});

module.exports = router;
