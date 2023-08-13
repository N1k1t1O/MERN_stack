const {Schema, model} = require ("mongoose")


const User = new Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, requried: true},
    avatar: {type: String, default: ''},
    attractions: [{ref: 'attractions', type: Schema.Types.ObjectId}]
    


})


module.exports = model('users', User)

