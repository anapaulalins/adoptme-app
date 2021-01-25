import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import Comments from './Comment'
import Post from './Post'
import ReplyComment from './ReplyComment'

@Entity('users')
class User{
    
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column('varchar')
    name: string

    @Column('varchar')
    email: string

    @Column('varchar')
    password: string

    @OneToMany(type => Post, post => post.user, {cascade: ['insert', 'update'],})
    @JoinColumn({name: 'userId'})
    posts: Post[]

    @OneToMany(type => Comments, comments => comments.user, {cascade: ['insert', 'update']})
    @JoinColumn({name: 'userId'})
    comments: Comments[]

    @OneToMany(type => ReplyComment, replyComment => replyComment.user, {cascade: ['insert', 'update']})
    @JoinColumn({name: 'userId'})
    replyComment: ReplyComment[]

    @Column('varchar')
    avatar: string

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    updated_at: Date
}

export default User