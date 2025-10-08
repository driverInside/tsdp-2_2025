const express = require('express');
const router = express.Router();

const db = require('../db/mongo');

router.get('/', async (req, res) => {

  const users = await db.collection('users').find({});

  console.log(users);
  await db.client.close();

  return res.send(users);

});

module.exports = router;
