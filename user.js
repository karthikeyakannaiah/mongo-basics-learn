const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1
    },
    email: {
        type:String,
        minLength: 10,
        required:true,
        lowercase:true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: ()=> Date.now()
    },
    updatedAt: Date,
    bestfriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: {
        street: String,
        city: String
    }
})
module.exports = mongoose.model('User',userSchema)