// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller
router.get('/', (req, res) => {
  res.render('results')
})

//Results Array

let resArr = [
  {
    title: 'JS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      }
    ]
  },
  {
    title: 'Test 2',
    description: 'stuff2',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: '2222',
        url: 'https://www.w3schools.com/js'
      },
      {
        title: '22222',
        url: 'https://www.w3schools.com/js'
      }
    ]
  },
  {
    title: 'Test 3',
    description: 'stuff3',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: '3333',
        url: 'https://www.w3schools.com/js'
      },
      {
        title: '33333',
        url: 'https://www.w3schools.com/js'
      }
    ]
  }
]

// Export module
module.exports = router
