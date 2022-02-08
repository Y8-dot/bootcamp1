const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name: String,
    lastname: String,
    mail: String,
    user: String,
    birthday : Number

},
{
    timestamps: true
})

module.exports = model('User', userSchema)