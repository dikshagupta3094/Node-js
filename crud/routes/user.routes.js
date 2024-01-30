const express = require('express')

const {home, createUser} = require('../controllers/user.contollers.js');
// const { router } = require('../app.js');
const router = express.Router();
router.get('/',home)
router.post('/createuser',createUser)
module.exports = router;