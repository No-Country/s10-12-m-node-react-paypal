const userController = require('../controllers/user.controller');
const {
    loginValidation,
    createUserValidation,
    updateUserInfo,
    changePassword,
} = require('../middlewares/validated.middleware');
const {
    protectRoute,
    verifyAccountOwner,
} = require('../middlewares/auth.middleware');
const express = require('express');

const router = express.Router();

router.post('/create', createUserValidation, userController.createUser);

router.post('/login', loginValidation, userController.login);

router.put(
    '/updated_user/:id',
    protectRoute,
    verifyAccountOwner,
    updateUserInfo,
    userController.updateUserInfo,
);

router.put(
    '/change_password/:id',
    protectRoute,
    verifyAccountOwner,
    changePassword,
    userController.changePassword,
);

router.delete(
    '/destroy_user/:id',
    protectRoute,
    verifyAccountOwner,
    userController.deleteUser,
);

router.get(
    '/:id/fabricio_get/:nickname',
    protectRoute,
    verifyAccountOwner,
    userController.getUser,
);

module.exports = router;
