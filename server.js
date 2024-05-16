const express = require('express');

//middleware required
const cors = require('cors')
const logger = require('morgan')
const aptRouter = require('./routes/apartments.js')
const housesRouter = require('./routes/houses')

const PORT = process.env.PORT || 3000;
const app = express()

//middleware used
app.use(cors())
app.use(logger('dev'))


//Routes
app.get('/', (req, res) => {
    res.send("welcome!")
  })

app.use('/apartments', aptRouter);
app.use('/houses', housesRouter);

app.listen(PORT, function(){
    console.log(`server is running on ${PORT}`);
});