const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    name: {
    type: String,
    },

    picture : {
    data : Buffer,
    contentType : String
    }

})

const User = mongoose.model('user', userSchema);

module.exports = User;