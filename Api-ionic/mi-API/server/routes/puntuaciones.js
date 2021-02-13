const express = require('express');
const router = express.Router();
const serieController = require("../controllers/serie");



router.post('/', serieController.postPuntuacion);
router.get('/', serieController.getPuntuacion);


module.exports = router;
