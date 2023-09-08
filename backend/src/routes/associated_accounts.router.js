const express = require('express')
const associatedController = require('../controllers/associated_account.controller')
const { protectRoute, verifyAccountOwner } = require('../middlewares/auth.middleware')

const router = express.Router()

router.post()

router.get('/show', associatedController.createAssociatedAcc)
