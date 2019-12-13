import mongoose ,{Schema,Document} from 'mongoose';

export interface User extends Document{
     email:string;
     name:string; 
}
const userschema: Schema = new Schema ({
    email:{type : 'string', required:true , unique: true},
    name:{type : 'string', required:true , unique: true},
})

export default mongoose.model<User>('items', userschema);       