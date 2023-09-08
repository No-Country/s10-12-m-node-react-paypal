const userController = require('../controllers/user.controller');
const {
    loginValidation,
    createUserValidation,
} = require('../middlewares/validated.middleware');
const express = require('express');

const router = express.Router();

router.post('/create', createUserValidation, userController.createUser);

router.post('/login', loginValidation, userController.login);

module.exports = router;

