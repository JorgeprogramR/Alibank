import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
    accountType:{
        type:String,
        required:true
    },
    balance:{
        type:String,
        required:true

    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }
})

export default mongoose.model('Account', accountSchema)