// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller

router.get('/', (req, res) => {
  res.render('results', { results })
})

// Export module
module.exports = router
