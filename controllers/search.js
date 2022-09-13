// Packages
const express = require('express')
const router = express.Router()

// Views
// Create here a controller that accepts GET requests and renders the "search" page
const searchControl = app.get('/', (req, res) => {
  res.render('search')
})

// Export
module.exports = router
module.exports = searchControl
