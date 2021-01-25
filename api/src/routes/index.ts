import { Router } from 'express'
import postRouter from './post.routes'
import sessionAuthRoutes from './session.routes'
import userRouter from './users.routes'

const routes = Router()

routes.use('/users', userRouter)
routes.use('/posts', postRouter)
routes.use('/session', sessionAuthRoutes)

export default routes