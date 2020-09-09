const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Set view engine
app.set('view engine', 'ejs');

// Bodyparser Middleware
app.use(express.json());

// URL Encoder
app.use(express.urlencoded({ extended: false }));

// DB Config
const db = require('../config/keys').mongoURI;

// Connect to MongoDB
(async () => {
  await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
    console.log("Connected to DB");
  })
})();

// Articles
const Article = require('./models/Article');
app.get('/', async (req, res) => {
  const articles = await Article.find().sort({
    createdAt: 'desc'
  })
  res.render('articles/index', { articles: articles })
});

// Use Routes
const articleRouter = require('./routes/articles');
app.use('/articles', articleRouter);

// Start Server and Port configuration
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
});