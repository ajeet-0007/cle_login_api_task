const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://krishna:12345@rest.pzlvqoo.mongodb.net/?retryWrites=true&w=majority',{
}).then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log(err);
})

module.exports = mongoose;