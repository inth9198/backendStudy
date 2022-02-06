const express = require('express')

const app = express()
const port = 3000
const { User } = require("./models/User");
const bodyParser = require('body-parser');

//bodyParser 는 클라이언트에서 오는 정보들을분석해서 가져옴
app.use(bodyParser.urlencoded({extended: true}));
//application/x-www-form-urlencoded이런 식의 데이터를 분석

app.use(bodyParser.json());
//application/json  분석


const mongoose = require('mongoose');
const req = require('express/lib/request');
const URI = process.env.MONGODB_URL;
mongoose
.connect('mongodb+srv://minho:1234@boiler-plate.zaecg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log("MongoDB Connected..."))
.catch((e) => console.log("MongoDB error: ", e));


app.get('/', (req, res) => {
  res.send('Hello World!!!!!!')
})

app.post('/register', (req, res) =>{
  //회원가입시 필요정보들을 client에서 가져오며
  //그것들을 데이터 베이스에 넣어줌

  const user = new User(req.body)
  user.save((err, userInfo)=>{
    if(err) return res.json({success:false, err})
    return res.status(200).json({
      success:true
    })
  })//유저 내용 저장
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})