const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Set the view engine that the website will use
app.set('view engine', 'ejs');

// Middlewares
app.use(bodyParser.json());

// Import Routes
const postsRoutes = require('./routes/posts');

// Init Routes
app.use('/posts', postsRoutes);

// Home
app.get('/', (req, res) => {
  res.send('<h1>We are on home!</h1>');
})

// DB Config and Connection
const db = require('../config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to DB.');
})

//app.get('/posts', (req, res) => {
//    res.send('Posts');
//})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
})