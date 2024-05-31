const Message = require("../models/message");

async function addMessage(data) {
  try {
    const message = new Message(data);
    await message.save();
    return message;
  } catch (error) {
    return error;
  }
}

async function FindMessage(req, res) {
  try {
    const message = await Message.find();
    res.send(message);
  } catch (err) {
    res.status(400).send({ error: error.message });
  }
}

module.exports = {
  addMessage,
  FindMessage
};
