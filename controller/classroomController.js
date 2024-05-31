const Classroom = require("../models/classroom");

async function AddClassroom(req, res) {
    try {
        const user = new Classroom(req.body);
        await user.save();
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(400).send({ error: error.message });
    }
}

async function FindClassroom(req,res){
    try{
        const user= await Classroom.find()
        res.send(user)
    }catch(err){
        res.status(400).send({ error: error.message });


    }
}

async function getbyid(req, res) {
    try {
      const data = await Classroom.findById(req.params.id);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  }

async function getClassroomByName(req, res){
    try {
        let name =req.params.name
        const data =await Classroom.findOne({name});
        res.status(200).send(data);
    } catch(err) {
        res.status(400).json({error : err});

    }
}

async function updateClassroom(req,res){
    try{
        await Classroom.findByIdAndUpdate(req.params.id,req.body);
        res.status(205).send('Updated');
    }catch (error){
        res.status(400).send({ error: error.message });
    }
}

async function removeClassroom(req, res) {
    try {
      await Classroom.findByIdAndDelete(req.params.id);
      res.status(200).send("deledted");
    } catch (err) {
      res.status(400).json({ error: err });
    }
  }
module.exports = {
    AddClassroom,
    FindClassroom,
    getbyid,
    getClassroomByName,
    updateClassroom,
    removeClassroom
}