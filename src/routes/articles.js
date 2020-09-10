const express = require("express");
const marked = require('marked');
const slugify = require('slugify');
const router = express.Router();

const Article = require('./../models/Article');

// GET route for a new article
router.get('/new', (req, res) => {
  res.render('articles/new', { article: new Article() })
});

// GET route for each article
router.get('/:slug', async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug });
  if (article == null) res.redirect('/');
  res.render('articles/show', { article: article });
});

// POST route
router.post('/', async (req, res) => {
  let article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  });
  try {
    await article.save();
    res.redirect(`/articles/${article.slug}`);
  } catch (err) {
    console.log(err);
    res.render('articles/new', { article: article })
  }
});

module.exports = router;