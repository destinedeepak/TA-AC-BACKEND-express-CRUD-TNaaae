var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: 'String', require: true},
    age: {type :'Number'}
})

module.exports = mongoose.model('User', userSchema);