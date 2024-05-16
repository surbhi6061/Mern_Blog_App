import express from 'express';
import { deleteUser, signout, test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router=express.Router();

router.get('/test',test);
router.put('/update/:userId', verifyToken, updateUser);//'/update/:userId' -this is coming from req.params
router.delete('/delete/:userId',verifyToken,deleteUser);
router.post('/signout',signout)
export default router;





