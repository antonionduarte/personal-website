const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv/config');

// Middlewares
//app.use('/posts', () => {
//    console.log('Middleware running...');
//});


// Routes
app.get('/', (req, res) => {
    res.send('We are on home!');
})

// Connect to DB
mongoose.connect('mongodb://rorisjack:catrapim123@cluster0.ncrey.mongodb.net/personal-website?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Connected to DB.');
    })

//app.get('/posts', (req, res) => {
//    res.send('Posts');
//})

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})