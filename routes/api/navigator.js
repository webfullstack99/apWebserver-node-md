var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use('/posts', require('./posts'));
router.use('/users', require('./users'));
module.exports = router;