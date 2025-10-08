const { MongoClient } = require('mongodb');

const mongodburi = 'mongodb://localhost:27017/app';

const client = new MongoClient(mongodburi);
const db = client.db()

module.exports = db;
