import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, ManyToOne , JoinColumn, OneToMany} from 'typeorm'
import User from './User'
import Image from './Image'
import Comments from './Comment'

@Entity('posts')
class Post{

    @PrimaryGeneratedColumn('increment')
    id: string

    @Column('varchar')
    description: string

    @Column('varchar')
    category: string

    @Column('varchar')
    place: string

    @Column('varchar')
    region: string

    @ManyToOne(type => User, user => user.posts, {eager: true} )
    @JoinColumn({name: 'userId'})
    user: User

    @OneToMany(type => Image , image => image.post, {cascade: true, onDelete: "CASCADE"})
    @JoinColumn({name: 'postId'})
    images: Image[]

    @OneToMany(type => Comments, comments => comments.post, {cascade: true, onDelete: "CASCADE"})
    @JoinColumn({name: 'postId'})
    comments: Comments[]

    @CreateDateColumn()
    created_at: Date
}

export default Post