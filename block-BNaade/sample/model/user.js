var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: 'String', require: true},
    email: {type: 'String',},
    description:{type:'String'}
})

module.exports = mongoose.model('User', userSchema);