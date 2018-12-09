const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/userCtrl');

/*
En este archivo van a ir todas las interacciones con el servidor, 
se trabaja por medio de las rutas y diferentes clases de Javascript

La idea es subir este servidor a un host como Heroku, para poder
enviarle las peticiones
*/

/*
Se requiere la ruta checkname, si vamos al provider se ve que
se manda un request post con esta misma ruta, por lo que el 
servidor manda su respuesta.
*/
router.post('/checkname', (req, res)=>{
 
    res.json('Respuesta del servidor');
 
});

module.exports = router;