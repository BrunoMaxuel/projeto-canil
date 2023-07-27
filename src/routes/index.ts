import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';
import * as newUserController from '../controllers/newUserController';

const router = Router();

router.get('/', HomeController.home);

router.get('/novo', newUserController.cliente);
router.get('/:id/delete', UserController.DeleteUser);
router.get('/:id/add', UserController.AumentarIdade);
router.get('/:id/remove', UserController.DiminuirIdade);

export default router;