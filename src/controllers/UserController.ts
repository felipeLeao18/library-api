import {Request, Response} from 'express'
import {createUserDb} from '../services/UserService'

export async function createUser (req: Request, res: Response): Promise<Response>{
const newUser = await createUserDb(req.body)
    return res.json({
        message: `Welcome a board ${newUser.name}`,
        newUser
    })
}