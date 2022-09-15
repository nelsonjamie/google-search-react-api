// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller
router.get('/', (req, res) => {
  res.render('results', { results: results })
})

//Results Array

const results = [
  {
    title: 'JavaScript Tutorial - W3School',
    description:
      'Well organized and easy to understand Web building tutorials with lots	of examples of how to use HTML',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JavaScript Introduction',
        url: 'https://www.w3schools.com/js/js_intro.asp'
      },
      {
        title: 'JS Functions',
        url: 'https://www.w3schools.com/js/js_functions.asp'
      },
      {
        title: 'JavaScript Examples',
        url: 'https://www.w3schools.com/js/js_examples.asp'
      }
    ]
  },
  {
    title: 'JavaScript | MDN',
    description:
      'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting langauge for Web pages, CouchDB, and Adobe Acrobat.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    links: [
      {
        title: 'JavaScript Basics',
        url:
          'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics'
      },
      {
        title: 'JavaScript reference',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference'
      },
      {
        title: 'About JavaScript',
        url:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript'
      }
    ]
  },
  {
    title: 'JavaScript - Wikipedia',
    description:
      'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time.',
    url: 'https://en.wikipedia.org/wiki/JavaScript',
    links: [
      {
        title: 'JavaScript Syntax',
        url: 'https://en.wikipedia.org/wiki/JavaScript_syntax'
      },
      {
        title: 'JavaScript Definition',
        url:
          'https://en.wikipedia.org/wiki/Comparison_of_JavaScript-based_web_frameworks'
      }
    ]
  }
]

// Export module
module.exports = router
