const express = require('express');

let router=express.Router()

router.post('/addEvent')
router.get('/allEvent')
router.get('/singleEvent:eid')
router.put('/updateEvent')
router.delete('deleteEvent:eid')

module.exports=router