const express = require("express")
const router = express.Router()
const User = require("../models/user")
const {
    AddUser,
    FindUser,
    getbyid,
    getUserByName,
    updateUser,
    removeUser
} = require("../controller/userController")
const {validate} = require("../middleware/validator")

router.get("/",(req,res)=>{
    res.render("chat")
})




router.post('/add',validate, AddUser);

router.get('/getall', FindUser);

router.get("/getbyid/:id",getbyid);

router.get('/getbyname/:name',getUserByName);

router.put('/update/:id',updateUser);

router.delete('/delete/:id',removeUser);

module.exports = router;