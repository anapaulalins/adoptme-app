import { Router } from 'express'
import multer from 'multer'
import { UpdateAvatarUser } from '../controllers/updateAvatarControllers'
import {CreateUser, getUser} from '../controllers/usersControllers'
import uploadConfig from '../config/uploadConfig'

const userRouter = Router()
const upload = multer(uploadConfig)

userRouter.post('/', async (request, response) => {
    try{

        const {name, email, password } = request.body

    const userCreate = new CreateUser()

    const user = await userCreate.create({
        name,
        email,
        password
    })

    response.json(user)

    }catch(err){

        response.status(400).json({erro: err.message})
    }
})

userRouter.get('/:id', async (request, response) => {

    try{

        const { id } = request.params

        const getUserById = new getUser()

        const user = await getUserById.execute({
            id
        })

        response.json(user)

    }catch(err){
        response.json({erro: err.message})
    }
})


userRouter.patch('/avatar/:id', upload.single('avatar'), async (request, response) => {

    try{
        const { id } = request.params

        const updateAvatar = new UpdateAvatarUser()

        const userUpdate = await updateAvatar.update({
            userId: id,
            avatarFile: request.file.filename
        })

        response.json(userUpdate)

    }catch(err){
        response.json({erro: err.message})
    }
})

export default userRouter