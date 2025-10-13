const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const userSchema = new mongoose.Schema({});
const Users = mongoose.model('User', userSchema);

router.get('/', async (_, res) => {
  const users = await Users.find({});
  return res.send(users);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      error: 'id invalid',
    });
  }

  const user = await Users.findById(id);

  if (!user) {
    return res.status(404).send({
      message: 'user not found',
    });
  } else {
    return res.send(user);
  }
  return res.status
});

module.exports = router;
