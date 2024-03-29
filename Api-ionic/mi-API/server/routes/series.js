const express = require('express');
const router = express.Router();
const serieController = require("../controllers/serie");




router.get('/', serieController.getSeries);
router.get('/:id', serieController.getSerie);
router.post('/', serieController.postPuntuacion);
router.get('/', serieController.getPuntuacion);


module.exports = router;
