const express = require("express");
const router = express.Router();
const { addMessage, FindMessage } = require("../controller/messageController");

router.post("/addmessage", addMessage);

router.get("/getallmessage", FindMessage);

module.exports = router;
