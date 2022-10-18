const express = require('express');
const router = express.Router();
const {authLoginMiddleware, authMiddleware} = require('../middlewares');
const UsersController = require('../controllers/users.controller');
const usersController = new UsersController();


router.get('/signup',authLoginMiddleware, usersController.createUser);
router.get('/login',authLoginMiddleware, usersController.loginUser);
router.get('/me', authMiddleware, usersController.comfirmUser);


