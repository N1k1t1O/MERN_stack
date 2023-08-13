const {Schema, model} = require ("mongoose")


const Attraction = new Schema({
    name: {type: String, require: true},
    city: {type: String, require: true},
    body: {type: String, default: 'no description yet'}
       
})


module.exports = model('attractions', Attraction)