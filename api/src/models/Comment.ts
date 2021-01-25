import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm'
import Post from './Post'
import ReplyComment from './ReplyComment'
import User from './User'


@Entity('comments')
class Comments {

    @PrimaryGeneratedColumn('increment')
    id: string

    @Column('varchar')
    message: string

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(type => Post, post => post.comments)
    post: Post

    @ManyToOne(type => User, user => user.comments, {eager: true})
    user: User

    @OneToMany(type => ReplyComment, replyComment => replyComment.comment )
    @JoinColumn({name: 'commentId'})
    replyComment: ReplyComment[]

}

export default Comments