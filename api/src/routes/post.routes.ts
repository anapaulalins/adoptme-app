import {  Router} from 'express'
import multer from 'multer'
import {CreatePost, deletePost, getAllPosts, getPost } from '../controllers/postsControllers'
import uploadConfig from '../config/uploadConfig'
import { CreateComments, CreateReplyComment } from '../controllers/commentsControllers'

const postRouter = Router()
const upload = multer(uploadConfig)


postRouter.post('/', upload.array('images') , async (request, response) => {
    try{
        const { description, category, user, place, region} = request.body

        const requestImage = request.files as Express.Multer.File[]

        const images = requestImage.map(image => {
            return { path: image.filename}
        })

        const postCreate = new CreatePost()

        const post = await postCreate.create({
            description,
            category,
            user,
            images,
            place,
            region
        })

        response.json(post)

    }catch(err){
        response.json({error: err.message})
    }
})

postRouter.post('/comments', async (request, response) => {
    try {

        const { message, post, user } = request.body

        const createCommentsPost = new CreateComments()

        const comment = await createCommentsPost.create({
            message,
            post,
            user
        })

        response.json(comment)

    }catch(err){
        response.json({error: err.message})
    }
})

postRouter.post('/comments/reply', async (request, response) => {
    try{

        const {message, comment, user} = request.body

        const createReply= new CreateReplyComment()

        const replyComment = await createReply.create({
            message,
            comment,
            user
        })

        response.json(replyComment)

    }catch(err){
        response.json({erro: err.message})
    }
})


postRouter.get('/', async (request, response) => {
    try{

        const {  page, limit } = request.query

        const realPage = (Number(page) - 1) * Number(limit)

        const allPosts = new getAllPosts()

        const posts = await allPosts.execute({
            page: realPage,
            limit: Number(limit)
        })

        response.json(posts)

    }catch(err){
        response.json({error: err.message})
    }
})

postRouter.get('/:id', async (request, response ) => {
    try{

        const { id } = request.params

     
        const getOnePost = new getPost()

        const post = await getOnePost.execute({
            id
        })

        response.json(post)

      

    }catch(err){
        response.json({error: err.message})
    }
})


postRouter.delete('/delete/:id', async (request, response) => {
    try{
        const { id } = request.params

        const postDelete = new deletePost()

        const post = await postDelete.delete({
            id
        })

        response.json(post)
    }catch(err){
        response.json({erro: err.message})
    }
})


export default postRouter