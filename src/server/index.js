const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middlewares
//app.use('/posts', () => {
//    console.log('Middleware running...');
//});

// Import Routes
const postsRoutes = require('./routes/posts');

// Init Routes
app.use('/posts', postsRoutes);

// Home
app.get('/', (req, res) => {
    res.send('<h1>We are on home!</h1>');
})

// Connect to DB
mongoose.connect('mongodb://rorisjack:catrapim123@cluster0.ncrey.mongodb.net/personal-website?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Connected to DB.');
    })

//app.get('/posts', (req, res) => {
//    res.send('Posts');
//})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})