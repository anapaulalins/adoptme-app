import { getRepository } from 'typeorm'
import Post from '../models/Post';
import User from '../models/User';

import fs from 'fs'
import path from 'path'
import uploadConfig from '../config/uploadConfig'

interface PropsPost{
    description: string,
    category: string,
    user: User
    images: Array<PropsImage>
    place: string,
    region: string
}

interface PropsImage{
    path: string
}

interface PropsPostParams{
    limit?: number
    page?: number
}

interface PropsPostId{
    id: string
}

export class CreatePost{
    async create( { description, category, user, images, place, region} : PropsPost) : Promise<Post>{

        const postRepository = getRepository(Post)

        const post = postRepository.create({
            description,
            category,
            user,
            images,
            place,
            region
        })
        await postRepository.save(post)

        return post 

    }
}

export class getAllPosts{
    async execute({ limit, page} : PropsPostParams){

        const postRepository = getRepository(Post)

        const allPosts = await postRepository.find({
            relations: ['images', 'comments', 'comments.replyComment'],
            order: {
                created_at: 'DESC'
            },
            skip: page,
            take: limit
        })

        return allPosts

    }
}


export class getPost {
    async execute({ id} : PropsPostId): Promise<Post>{

        const postRepository = getRepository(Post)

        const post = await postRepository.findOne({where: { id}, relations: ['images', 'comments', 'comments.replyComment']})

        if(!post){
            throw new Error('Post not found')
           }

        return post
    }
}


export class deletePost {
    async delete({ id} : PropsPostId) : Promise<Post>{

        const postRepository = getRepository(Post)

        const post = await postRepository.findOne({where: { id}, relations: ['images']})

        const postImages =  post?.images

        postImages?.map(image => {
          const postImagePath = path.join(uploadConfig.directory, image.path)
          const postImageExist =  fs.promises.stat(postImagePath)

          if(postImageExist){
            fs.promises.unlink(postImagePath)
            }
        })

        if(!post){
            throw new Error('Post not found')
        }

        await postRepository.remove(post)

        return post

    }
}

