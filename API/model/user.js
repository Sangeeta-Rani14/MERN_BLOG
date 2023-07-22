const mongoose = require('mongoose');
const { Schema,model } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true, min: 6, unique: true },
    email: { type: String, required: true,},
    password:{type:String, required:true, min:5}
    
    
});

const UserModel = model('user', UserSchema);

module.exports = UserModel;