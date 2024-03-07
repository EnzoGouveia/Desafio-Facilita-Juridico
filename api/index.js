const express = require('express');
const app = express();
const cors = require('cors');

const UserRoute = require('./src/routes/userRoute');
const CalculateRoute = require('./src/routes/calculateRoute');

app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(8800, async () => {
    console.log('app listening on port 8800');
})

app.use('/', UserRoute)
app.use('/calculate', CalculateRoute)

module.exports = app;