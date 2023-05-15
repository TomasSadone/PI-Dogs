const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const dogsRouter = require('./dogs');
const temperamentsRouter = require('./temperaments');

const router = Router();

router.use('/dogs', dogsRouter);
router.use('/temperaments', temperamentsRouter);

// mover todas a una dog route, por si hubiera otra como login.

module.exports = router;
