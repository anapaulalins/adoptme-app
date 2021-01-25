import { Router } from 'express'
import { AutheticateUser } from '../controllers/authControllers'


const sessionAuthRoutes = Router()

sessionAuthRoutes.post('/', async (request, response) => {
    try{

        const { email, password } = request.body

        const authUser = new AutheticateUser()

        const {user, token} = await authUser.auth({
            email,
            password
        })

        response.json({user, token})

    }catch(err){
        response.json({erro: err.message})
    }

})

export default sessionAuthRoutes