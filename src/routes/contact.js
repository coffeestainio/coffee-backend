const Contact = require('../controllers/contact');
const express = require('express')
const router = express.Router()
/*
* @author: PCALVO 2017
*/
router.post('/add', Contact.addContact);
module.exports = router;
