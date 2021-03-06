const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

const User = require('../models/User')

// GET route for login
router.get('/login', (res) => {
	res.render('authentication/login')
})

// GET route for register
router.get('/register', (res) => {
	res.render('authentication/register')
})

// POST route for register
router.post('/register', async (req, res) => {
	const hashedPassword = await bcrypt.hash(req.body.password, 10)
	let user = new User()
	user.username = req.body.name
	user.email = req.body.email
	user.password = hashedPassword
	try {
		user = await user.save()
		res.redirect('/authentication/login')
	} catch (err) {
		res.redirect('/authentication/register')
		console.log(err)
	}
})

module.exports = router
