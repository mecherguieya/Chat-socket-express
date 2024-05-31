const express = require("express")
const router = express.Router()
const {
    AddClassroom,
    FindClassroom,
    getbyid,
    getClassroomByName,
    updateClassroom,
    removeClassroom
} = require("../controller/classroomController")


router.post('/add', AddClassroom);

router.get('/getall', FindClassroom);

router.get("/getbyid/:id",getbyid);

router.get('/getbyname/:name',getClassroomByName);

router.put('/update/:id',updateClassroom);

router.delete('/delete/:id',removeClassroom);

module.exports = router;