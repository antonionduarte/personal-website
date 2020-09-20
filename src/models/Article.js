const mongoose = require('mongoose')
const marked = require('marked')
const createDomPurify = require('dompurify')
const slugify = require('slugify')
const { JSDOM } = require('jsdom')

const dompurify = createDomPurify(new JSDOM().window)

const CommentSchema = mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const ArticleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  markdown: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  sanitizedHTML: {
    type: String,
    required: true
  },
  comments: [CommentSchema]
})

ArticleSchema.pre('validate', function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true })
  }

  if (this.markdown) {
    this.sanitizedHTML = dompurify.sanitize(marked(this.markdown))
  }

  next()
})

module.exports = mongoose.model('Article', ArticleSchema)