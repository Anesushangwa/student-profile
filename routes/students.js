const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/students');

router.get('/', contactsController.getAll);

// router.get('/:id', contactsController.getSingle);

//Post Method
router.post('/', contactsController.newinfo)

// router.put('/:id', contactsController.updateContact);

// router.delete('/:id', contactsController.deleteinfo);


module.exports = router;