import mongoose from "mongoose";

const { Schema } = mongoose;
const UserSchema = new Schema({
    name:{
         type: String,
         required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
   },
    password:{
    type: String,
    required: true
},
date:{
    type: Date,
    default: Date.now           //gives the current date always
}
});
const User = mongoose.model('User', UserSchema);

export default User; // Assuming you're using ES module syntax for exports