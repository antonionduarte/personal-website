const express = require("express")
const marked = require('marked')
const slugify = require('slugify')
const router = express.Router()

const Article = require('./../models/Article')

// GET route for a new article
router.get('/new', (req, res) => {
  res.render('articles/new', { article: new Article() })
})

// GET route for each article
router.get('/:slug', async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug })
  if (article == null) res.redirect('/')
  res.render('articles/show', { article: article })
})

// GET route for article edition
router.get('/edit/:id', async (req, res) => {
  const article = await Article.findById(req.params.id)
  res.render('articles/edit', { article: article })
})

// POST route
router.post('/', async (req, res, next) => {
  req.article = new Article()
  next()
}, saveAndRedirect('new'))

// PUT route
router.put('/:id', async (req, res, next) => {
  req.article = await Article.findById(req.params.id)
  next()
}, saveAndRedirect('edit'))

// DELETE route
router.delete('/:id', async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id)
  } catch (err) {
    console.log(err)
  }
  res.redirect('/')
})

function saveAndRedirect(path) {
  return async (req, res) => {
    let article = req.article
    article.title = req.body.title
    article.description = req.body.description
    article.markdown = req.body.markdown
    try {
      article = await article.save()
      res.redirect(`/articles/${article.slug}`)
    } catch (err) {
      res.render(`/articles/${path}`, { article: article })
    }
  }
}

module.exports = router