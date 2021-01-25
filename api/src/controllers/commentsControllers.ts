import { getRepository} from 'typeorm'
import Comments from '../models/Comment';
import Post from '../models/Post';
import ReplyComment from '../models/ReplyComment';
import User from '../models/User';


interface PropsComments{
    message: string,
    post: Post,
    user: User
}

interface PropsReplyComment{
    message: string,
    comment: Comments
    user: User
}

export class CreateComments {
    async create({ message, post, user} : PropsComments ): Promise<Comments>{

        const commentsRepository = getRepository(Comments)

        const comments = commentsRepository.create({
            message,
            post,
            user
        })

        await commentsRepository.save(comments)

        return comments
    }
}

export class CreateReplyComment {
    async create({message, comment, user} : PropsReplyComment): Promise<ReplyComment>{

        const replyCommentRepository = getRepository(ReplyComment)

        const replyComment = replyCommentRepository.create({
            message,
            comment,
            user
        })

        await replyCommentRepository.save(replyComment)

        return replyComment
    }
}