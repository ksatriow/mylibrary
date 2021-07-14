const router = require('express').Router()
const homeRouter = require('./homeRouter')
const bookRouter = require('./bookRouter')

router.use('/', homeRouter)
router.use('/books', bookRouter)

module.exports = router