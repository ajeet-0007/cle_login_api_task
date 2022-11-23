const express = require('express');

const userCtrl = require('./controllers/userCtrl');

const router = express.Router();

var multer = require('multer');

router.use(express.urlencoded({ extended: true }))

const upload = multer();

router.get('/home', (req, res) => {
    if (req.session.email) {
        res.render('home', { name: req.session.name });
    } else {
        res.redirect('/login')
    }
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/add', (req, res) => {
    res.render('add')
})

router.post('/login-user', upload.any(), userCtrl.loginCheck)

router.post('/add-user', upload.any(), userCtrl.addUser)

router.get('/log-out', userCtrl.logOut)

module.exports = router;