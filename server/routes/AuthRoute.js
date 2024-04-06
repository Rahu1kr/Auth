import { Router } from 'express';
import { Login, Signup } from '../controllers/AuthController.js';
import { userVerification } from '../middlewares/AuthMiddleware.js';

const router = Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/', userVerification)

export default router;
