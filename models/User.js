const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength:50
    },
    email:{
        type: String,
        trim: true, //띄어쓰기 없애줌
        unique: 1 //하나만 쓰게함
    },
    password:{
        type: String,
        maxlength:5
    },
    lastname:{
        type: String,
        maxlength:50
    },
    role:{//관리자인지 유저인지
        type: Number,
        default: 0
    },
    image:String,
    token:{//유효성 관리
        type: String,
    },
    tokenEXP:{//유효기간 관리
        type: Number,
    }
})
const User = mongoose.model('User', userSchema)

module.exports = {User}//다른곳에서도 쓸수 있게