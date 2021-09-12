import {Schema,model, Document} from 'mongoose'

export interface IBook extends Document{
    title: string
    publisher: string
    created_at: Date
    updated_at: Date

}

const BookSchema = new Schema ({
    title: {type: String},
    publisher: {type: String},
    password: {type: String},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}

})

export default model <IBook>('books', BookSchema)