const express = require('express');

const {addemploye,getemploye,getemployes,updateemploye,deleteemploye} = require('../controller/emplyoe.controller')

let router = express.Router()

router.post('/addemploye',addemploye)
router.get('/getemploye/:pid',getemploye)
router.get('/getemployes',getemployes)
router.put('/updateemploye/:pid',updateemploye)
router.delete('/deleteemploye/:pid',deleteemploye)

module.exports = router


