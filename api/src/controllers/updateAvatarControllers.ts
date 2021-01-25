import { getRepository } from 'typeorm'
import User from '../models/User';
import fs from 'fs'
import path from 'path'
import uploadConfig from '../config/uploadConfig'

interface PropsAvatar{
    userId: string,
    avatarFile: string
}

export class UpdateAvatarUser {
    async update({ userId, avatarFile} : PropsAvatar) : Promise<User>{

        const userRepository = getRepository(User)

        const user = await userRepository.findOne(userId)

        if(!user){
            throw new Error('User not find')
        }

        if(user.avatar){

            const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar)
            const userAvatarFileExist = await fs.promises.stat(userAvatarFilePath)

            if(userAvatarFileExist){
                await fs.promises.unlink(userAvatarFilePath)
            }
            
        }

        user.avatar = avatarFile

        await userRepository.save(user)

        return user

    }
}