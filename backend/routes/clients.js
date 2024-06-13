import Router from 'express'
import clientsController from "../controllers/clientsController.js";
import authenticate from "../middleware/authMiddleware.js";
const router = new Router()

router.post('/', authenticate,  clientsController.create)
router.get('/:userId', authenticate,  clientsController.get)
router.put('/:clientId', authenticate, clientsController.update)
// Сделать валидацию всех входных параметров


export default router