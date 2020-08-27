const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = require('../config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err));

// Use Routes
const postRoutes = require('./routes/posts')
app.use('/posts', postRoutes);

// Start Server and Port configuration
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})