const express = require('express');
const router = express.Router();
const housesCtrl = require('../controllers/houses')


//our routes dedicated to our cat request will go here
router.get('/', housesCtrl.index)
router.get('/:id', housesCtrl.show)


module.exports = router