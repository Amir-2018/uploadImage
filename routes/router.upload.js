const Router  = require('express');
const router = Router();
const contUp = require('../controllers/controller.upload')



router.post('/upImage',contUp.uploadImage)

module.exports = router;