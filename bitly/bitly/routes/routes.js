import { Router } from '../deps.js'
import * as mainController from './controllers/mainController.js'
const router = new Router()

router.get('/', mainController.renderMain)
router.post('/', mainController.postFormData)

router.get('/:string', mainController.redirectTo)
export { router }
