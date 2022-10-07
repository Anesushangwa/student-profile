const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/admin');


router.get('/', contactsController.getAll);

router.get('/:firstname', contactsController.getSingle);

// //Post Method
// router.post('/',   validation.saveContact, contactsController.newinfo)

// router.put('/:id', validation.saveContact, contactsController.updatestu );

router.delete('/:id', contactsController.deleteinfo);

module.exports = router;