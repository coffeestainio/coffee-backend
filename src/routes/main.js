const express       = require('express')
const router        = express.Router()
const controller    = require('../controllers/main');

router.post('/', controller.main)

module.exports = router;