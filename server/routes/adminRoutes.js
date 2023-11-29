import express from "express";
import {approveUser, getAllPatient, getAllUser} from "../controller/adminController.js";
import {isAuthenticated, isAuthorized} from "../middleware/isAuthenticated.js";
import {getCentrePatient} from "../controller/userController.js";

const router = express.Router();



router
    .route('/getusers')
    .get(isAuthenticated,isAuthorized("admin"),getAllUser);

router
    .route('/getpatients')
    .get(isAuthenticated,isAuthorized("admin"),getAllPatient);

router
    .route('/approve/:id')
    .get(isAuthenticated,isAuthorized("admin"),approveUser);

export default router;