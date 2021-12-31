const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vyshnav:9847644201@cluster0.zh7ip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false });
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email : String,
    password: String,
    
});

var userdata = mongoose.model('userdata',UserSchema);

module.exports = userdata;