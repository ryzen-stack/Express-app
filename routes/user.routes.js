const express = require('express');
const { RegisterUser, LogUser } = require('../controller/user.controller');


let router = express.Router()

router.post('/register',RegisterUser)
router.post('/log',LogUser)

module.exports = router