const user = require("../models/user")
const express = require("express");
const app = express();
const router = express.Router()

router.post('/sign-up',(req, res)=>{
    const newUser = new user(req.body)

    newUser.save()
        .then((result) => res.redirect('/'))
})

router.get('/login', (req,res) =>{
    const username = req.name

    user.findById(username)
        .then((result) => {
            if (result.password === req.password){
                console.log("Logged in")
            }
        })

})

module.exports= router