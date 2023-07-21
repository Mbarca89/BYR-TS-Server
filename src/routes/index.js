const { Router } = require('express');
const propertiesRoutes = require('./propertiesRoutes.js')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/properties', propertiesRoutes)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;