import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, ManyToOne } from 'typeorm'
import Comments from './Comment'
import User from './User'

@Entity('replycomment')
class ReplyComment {

    @PrimaryGeneratedColumn('increment')
    id: string

    @Column('varchar')
    message: string

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(type => Comments, comments => comments.replyComment ,{cascade: true, onDelete: "CASCADE"})
    comment: Comments

    @ManyToOne(type => User, user => user.replyComment, {eager: true})
    user: User

}

export default ReplyComment