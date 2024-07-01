const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const connect = async () =>{
    await mongoose.connect('mongodb://127.0.0.1:27017/url_shortner');
}

module.exports = connect;