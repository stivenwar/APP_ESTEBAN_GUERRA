const express = require('express');
const router = express.Router();
const serieController = require("../controllers/serie");



router.get('/', serieController.getSeries);
router.get('/:id', serieController.getSerie);


module.exports = router;
