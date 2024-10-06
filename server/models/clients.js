const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    ClerkUser_id: {type:String, required: true},
    full_name: String,
    email: String,
    pwd: { type: String, required: false},
    photo_id: { type: String, required: false},
})

const ClientschemaModel = mongoose.model('client', ClientSchema)
module.exports = ClientschemaModel