import { Entity, PrimaryGeneratedColumn, Column, ManyToOne , JoinColumn} from 'typeorm'
import Post from './Post'

@Entity('images')
class Image {

    @PrimaryGeneratedColumn('increment')
    id: string

    @Column('varchar')
    path: string

    @ManyToOne(type => Post, post => post.images)
    post: Post

}


export default Image