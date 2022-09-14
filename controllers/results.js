// Import Packages
const express = require('express')
const router = express.Router()

//Views
router.get('/', (req, res) => {
  res.render('results')
})

// Create POST controller
router.POST('/', (req, res) => {
  res.render('results')
})

// Export module
module.exports = router
