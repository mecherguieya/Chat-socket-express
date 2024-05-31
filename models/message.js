const mongo=require("mongoose")
const Schema=mongo.Schema
const Message=new Schema({
    user:String,
    message:String
})
module.exports=mongo.model("message", Message )// parametre loul esm el collection