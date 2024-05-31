const mongo=require("mongoose")
const Schema=mongo.Schema
//cration de entite user
const User=new Schema({
    name:String,
    email:String,
    cin:Number,
})
module.exports=mongo.model("user", User )// parametre loul esm el collection