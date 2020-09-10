const express = require('express')
const router = express.Router()

// GET route for login
router.get('/login', (req, res) => {
  res.render('admin/login')
})

// GET route for register
router.get('/register', (req, res) => {
  res.render('admin/register')
})

module.exports = router