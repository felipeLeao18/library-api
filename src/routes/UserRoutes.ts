import {Router} from 'express'
import {
    createUser
} from '../controllers/UserController'

const router = Router()

router.route('/').post(createUser)