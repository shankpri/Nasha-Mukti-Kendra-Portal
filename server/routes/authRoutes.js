import express from "express";
import {createUser, login, logout} from "../controller/authController.js";


const router = express.Router();

router
    .route('/login')
    .post(login);

router
    .route('/signup')
    .post(createUser);

router
    .route('/logout')
    .get(logout);
export default router;