import Router from 'express'
import authController from "../controllers/authController.js";
import {check} from "express-validator";
import authenticate from "../middleware/authMiddleware.js";

const router = new Router()

router.post('/registration', [
    check('fio', 'ФИО не может быть пустым').notEmpty(),
    check('login', 'Логин не может быть пустым и должен быть корректным email').isEmail(),
    check('password', 'Пароль должен быть больше 5 и меньше 15 символов').isLength({min:5,max:15})
],authController.registration)
router.post('/login',authController.login)
router.get('/users', authenticate,  authController.getUsers)

export default router