import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

const imagesDirectory = path.resolve(__dirname, '..', '..', 'images')

export default {

    directory: imagesDirectory,

    storage: multer.diskStorage({
        destination: imagesDirectory ,
        filename: (request, file, callback) => {
            const fileHash = crypto.randomBytes(10).toString('hex')
            const fileName = `${fileHash}-${file.originalname}`

            return callback(null, fileName)
        }
    })


}