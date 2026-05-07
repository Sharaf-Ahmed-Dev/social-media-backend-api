import {Router} from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";

const router = Router();


router.route('/register').post(registerUser); // When a POST request comes to /registerUser, run registerUser function.
router.route('/login').post(loginUser);
router.route('/logout').post(logoutUser);

export default router;