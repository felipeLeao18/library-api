import User from '../models/User'
import bcrypt from 'bcryptjs'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { config } from '../config/AuthUser'

class LoginController {
  async handle (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const isUser = await User.findOne({ email })
    if (!isUser) throw new Error("User doesn't exists")

    const isPassword = await bcrypt.compare(password, isUser.password)
    if (!isPassword) throw new Error('Invalid password')

    return res.status(200).json({
      user: {
        name: isUser.name,
        email: isUser.email
      },
      token: jwt.sign({ id: isUser._id }, config.secret, {
        expiresIn: config.expiresIn
      })
    })
  }
}

export { LoginController }
