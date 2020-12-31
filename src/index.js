const express = require('express')
const mongoose = require('mongoose')
const app = express()
const methodOverride = require('method-override')
//const passport = require('passport')

// Authentication
//const initializePassport = require('./config/passport')
//initializePassport(passport, email => User.email === email)

// Set view engine
app.set('view engine', 'ejs')

// Set public folder
app.use(express.static(__dirname + '/public'))

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

// Config and Connect to DB
const db = require('./config/keys').mongoURI;

(async () => {
	await mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, () => {
		console.log("Connected to DB")
	})
})()

// Admin login and routes
const authenticationRouter = require('./routes/authentication')
app.use('/authentication', authenticationRouter)
app.use('/authentication', authenticationRouter)

// Article and routes
const Article = require('./models/Article')
app.get('/', async (res) => {
	const articles = await Article.find().sort({
		createdAt: 'desc'
	})
	res.render('articles/index', {articles: articles})
})

const articleRouter = require('./routes/articles')
// const User = require('./models/User') TODO.
app.use('/articles', articleRouter)

// Start Server and Port configuration
const port = process.env.PORT || 5000

app.listen(port, () => {
	console.log(`Server started on port: ${port}`)
})
