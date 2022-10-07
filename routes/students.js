const express = require('express');
const router = express.Router();
const  validation = require("../validation/user.validation");
const contactsController = require('../controllers/students');

// router.get('/', contactsController.getAll);

// router.get('/:id', contactsController.getSingle);

//Post Method
router.post('/',   validation.saveContact, contactsController.newinfo)

router.put('/:id', validation.saveContact, contactsController.updatestu );

router.delete('/:id', contactsController.deleteinfo);

// getAll, newinfo,updatestu,deleteinfo,getSingle


module.exports = router;