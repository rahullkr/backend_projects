const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const connect = async () =>{
    await mongoose.connect('mongodb://127.0.0.1:27017/expense_tracker');
}

module.exports = connect;