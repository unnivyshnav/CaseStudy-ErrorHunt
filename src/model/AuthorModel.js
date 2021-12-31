const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vyshnav:9847644201@cluster0.zh7ip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false });
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;