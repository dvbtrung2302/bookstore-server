require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoute = require('./routes/product.route');

const app = express();
const port = process.env.PORT || 8000;

mongoose.connect(
  process.env.MONGO_URL, 
  {useNewUrlParser: true, useUnifiedTopology: true, dbName: 'bookstore'},

);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/products', productRoute);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});