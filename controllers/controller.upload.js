const multer = require('multer');
const User = require('../models/User')


const Storage = multer.diskStorage({
    destination: '../app/uploads/',
    filename: function (req, file, cb) {
    //originalename Name of the file on the user’s computer
      cb(null, file.originalname );
    }
  })
//   const uploadFilter = function(req, file, cb) {
    // filter rules here
// }
  const upload = multer({
    storage : Storage,
    limits: {
        fileSize: 5000000,
      },
    //   fileFilter: uploadFilter
  }).single('image')  


module.exports.uploadImage = (req,res)=>{
   
    upload(req,res,(err)=>{
        if(err){
            if(err.code == 'LIMIT_FILE_SIZE'){
                res.status(500).json({
                    message : "Image size is over than 5MB"
                })   
            }  
        }

        else{
            const str = req.file.originalname;
            const slug = str.split('.').pop();
            if(slug =='jpg' || slug =='png' || slug =='jpeg' || slug =='gif'|| slug =='bmp' ){
                const user = new User({
                    name : req.body.name,
                    picture:{
                      data : req.file.filename,
                      contentType : 'image/png'
                    }
    
                  })
                  
                user.save().then(result =>{
                    if(result){
                        
                        res.status(200).json({
                            message : "Uploaded with success ..."
                        })
                    }else{
                        res.status(500).json({
                            message : "Image not Uploaded ... "
                        })
                    }
              
                }).catch(err =>{
                    console.log(err)
                })
            }else{
                res.status(500).json({
                    message : 'Only image are accepted '
                })
            }
          
        }
    })
}