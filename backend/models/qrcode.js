const mongoose = require('mongoose')

const qrSchema = new mongoose.Schema({
    tokenID : {
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    userObjectID : {
        type:String
    },
    createAt : {
        type:Date,
        default:Date.now,
        expires:'1m'
    }
})

module.exports = mongoose.model('QRCode',qrSchema)