import { Router } from "express";
import { register,login,logout } from "../controllers/userControllers.js";


const router = Router()

router.post('/register', register)
router.post('/signin', login)
router.get('/logout',logout)


export default router;