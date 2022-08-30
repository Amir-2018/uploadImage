const express = require('express')
const multer = require('multer');
var bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const dbURI = 'mongodb+srv://Mirou:amir169114@cluster0.48u3p.mongodb.net/Upload?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    (result) => {
      if(result)
        console.log('Connected succesfully');
      else
        console.log('not connected');
    })
  .catch((err) => console.log(err));



  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }))


const Routes = require('./routes/router.upload');
app.use(Routes)
app.listen(3000,()=>{
    console.log('server is listening on port 3000 ... ')
})