const express = require('express');
const router = express.Router();
const aptsCtrl = require('../controllers/apartments')


//our routes dedicated to our cat request will go here
router.get('/', aptsCtrl.index)
router.get('/:id', aptsCtrl.show)


module.exports = router