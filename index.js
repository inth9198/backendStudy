const express = require('express')

const app = express()
const port = 3000

const mongoose = require('mongoose')
const URI = process.env.MONGODB_URL;
mongoose
.connect('mongodb+srv://minho:1234@boiler-plate.zaecg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log("MongoDB Connected..."))
.catch((e) => console.log("MongoDB error: ", e));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})