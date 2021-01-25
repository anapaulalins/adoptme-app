import { getRepository} from 'typeorm'
import { hash  } from 'bcryptjs'
import User from '../models/User';

interface PropsUser{
    name: string,
    email: string,
    password: string
}

interface PropsGetUser{
    id: string
}

export class CreateUser{
    async create({ name, email, password} : PropsUser) : Promise<User>{

        const userRepository = getRepository(User)

        const checkUserExist = await userRepository.findOne({ where: { name }})

        if(checkUserExist){
            throw new Error('Username exist!')
        }

        const hashPassword = await hash(password, 8)

        const user = userRepository.create({
            name,
            email,
            password: hashPassword
        })

        await userRepository.save(user)

        return user

    }
}

export class getUser {
    async execute({id} : PropsGetUser){
        const userRepository = getRepository(User)

        const user = await userRepository.findOneOrFail(id, {
            relations:['posts'],  
        })

        return user
    }
}



