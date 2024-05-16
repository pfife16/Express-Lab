const Houses = require('../models/houses');

module.exports = {
    index,
    show
}

function index(req, res){
    const houses = Houses.getAll()
    res.json(houses)
}

function show(req, res){
    const houses = Houses.getOne(req.params.id)
    res.json(houses || {message: 'data not found'})
}