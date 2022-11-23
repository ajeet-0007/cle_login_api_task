const mongoose = require('mongoose');

const Users = require('../models/users');

const bcrypt = require('bcrypt');
const { response } = require('express');

const addUser = (req, res) => {
    var salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    //console.log(req.body);

    var data = new Users({
        _id: new mongoose.Types.ObjectId,
        name: req.body.userName,
        email: req.body.emailId,
        password: hash
    })
    data.save((error, result) => {
        if (error) {
            console.log(error);
        }
        res.redirect('/login')
    })
}

const loginCheck = async (req, res)=>{
    var results = await Users.findOne({name: req.body.userName});
    if(results){
        var check = await bcrypt.compare(req.body.password, results.password);
        if(check){
            sess = req.session;
            sess.name = results.name;
            sess.email = results.email;
            res.redirect('/home');
        }else{
            res.redirect('/login');
        }
    }else{
        res.redirect('/login');
    }
}

const logOut = (req, res) => {
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
        }
        res.redirect('/login');
    })
}

module.exports = {
    addUser, loginCheck, logOut
}