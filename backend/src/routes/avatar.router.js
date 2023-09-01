const { Router } = require('express')
const router =  Router()
const avatarUpload = require('../middlewares/multer')
const {updateAvatar, deleteAvatar } = require('../controllers/avatar.controller')

// api/avatar
//actualizar
router.put('/update/:id', avatarUpload, updateAvatar);

//Borrar
router.put('/delete/:id', deleteAvatar);

module.exports = router;