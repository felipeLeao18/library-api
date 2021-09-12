import express, {Request, Response, NextFunction} from 'express'
import {mongoooseConnection} from './config/database'


const app = express()
app.use(express.json())


import mongoose from 'mongoose'
mongoose.connect(mongoooseConnection)


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.message
      })
    }
  
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error'
    })
  })

  app.listen(3000, () => {
      console.log("Server is on")
  })
  