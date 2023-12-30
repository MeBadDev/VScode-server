const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  console.log('Request Type: ', req.method)
  console.log('Request URL: ', req.originalUrl)
  console.log('Request Body: ', req.body)
  next()
})
// define the home page route
router.post('/', (req, res) => {
  res.send(req.body)
})

module.exports = router

