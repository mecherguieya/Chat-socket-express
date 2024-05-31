const express=require("express")
const http=require("http")



const bodyparser=require("body-parser")


//db
const mongo = require("mongoose")
const config=require('./config/dbconnection.json')
mongo.connect(config.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("database connected")).catch(()=>console.log("not connected"))

//fichier router
const userRouter=require("./routes/users")
const classroomRouter=require("./routes/classroom")
const messageRouter=require("./routes/message")


const {join} = require("path");
const {addMessage} = require("./controller/messageController");


//creation d'un serveur const server=http.createServer(app)  server atineh app
var app=express()
//ligne hethi dima tahet app=express()
app.use(bodyparser.json())
//path folder views 
app.set("views",join(__dirname,"views"))
app.set("view engine","twig")


//fichier router
app.use("/users", userRouter);
app.use("/classroom", classroomRouter);
app.use("/messages", messageRouter);

//server config
const server=http.createServer(app)

// partie tawa socket yekho server eli samito fel ligne kbalha connection et // decoonection 
const io = require("socket.io")(server)
server.listen(3000,console.log('server is running'))

io.on("connection",(socket)=>{
    socket.emit("message","user is connected")
  //user deux users fazet ali is typing
    socket.on("message",(data)=>{
        addMessage(data).then(r => console.log("message added"+r))
        io.emit("message",data)
    })
    socket.on("typing",(data)=>{
        socket.broadcast.emit("typing",data)
    })



    socket.on("disconnect",()=>{
        io.emit("message","user is disconnected")
    })
})


//lezem exports bech ychoufouh kol
module.exports=app