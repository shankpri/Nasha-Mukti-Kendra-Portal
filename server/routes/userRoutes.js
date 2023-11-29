import express from "express";
import {addPatient, getCentrePatient, updatePatient} from "../controller/userController.js";
import {isAuthenticated, isAuthorized} from "../middleware/isAuthenticated.js";

const router = express.Router();

router
    .route('/new-patient')
    .post(isAuthenticated,isAuthorized("user"),addPatient);

router
    .route('/update-patient/:id')
    .put(isAuthenticated,isAuthorized("user"),updatePatient);

router
    .route('/getCentrePatient')
    .get(isAuthenticated,isAuthorized("user"),getCentrePatient);

export default router;