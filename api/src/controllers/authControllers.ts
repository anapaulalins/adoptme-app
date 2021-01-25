import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import authConfig from '../config/authConfig'
import User from '../models/User'

interface PropsAuthRequest{
    email: string,
    password: string
}

interface PropsAuthResponse{
    user: User,
    token: string
}

export class AutheticateUser{
    async auth({ email, password} : PropsAuthRequest) : Promise<PropsAuthResponse>{

        const userRespository = getRepository(User)

        const user = await userRespository.findOne({where: {email}})

        if(!user){
            throw new Error('Incorrect email/password combination')
        }

        const passwordCompare = await compare(password, user.password)

        if(!passwordCompare){
            throw new Error('Incorrect email/password combination')
        }

        const token = sign({}, authConfig.jwt.secret, {
            subject: user.id,
            expiresIn: authConfig.jwt.expiresIn
        })

        return {
            user, 
            token
        }
    }
}