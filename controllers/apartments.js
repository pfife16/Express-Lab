const Apts = require('../models/apartments');

module.exports = {
    index,
    show
}

function index(req, res){
    const apts = Apts.getAll()
    res.json(apts)
}

function show(req, res){
    const apts = Apts.getOne(req.params.id)
    res.json(apts || {message: 'data not found'})
}