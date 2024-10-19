import { Router} from 'express';
import * as UsersController from './users.controller'

const router = Router();

router
.post('/', UsersController.addUser)
.get('./login', UsersController.validateUser)


export default router;




