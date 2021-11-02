const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');
const categorytRoutes = require('./routes/categories');
const usertRoutes = require('./routes/users');
const expressValidator= require('express-validator');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(expressValidator());
app.use(cookieParser());


app.use('/api/product', productRoutes);
app.use('/api/category', categorytRoutes);
app.use('/api/user', usertRoutes);


const CONNECTION_URL = "mongodb+srv://sfarid811:Saad.2016@cluster0.dbyqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

