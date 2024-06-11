import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    document:{
        type: String,
        require: true,
        trim: true,
    },
    names:{
        type: String, 
        require: true,
        trim: true
    },
    surnames:{
        type: String, 
        require: true,
        trim: true
    },
    email:{
        type: String, 
        require: true,
        trim: true,
        unique: true
    },
    password:{
        type:String,
        require:true
    }

});

export default mongoose.model('User', userSchema)