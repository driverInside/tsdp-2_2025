const mongoose = require('mongoose');
const app = require('./app');
// TODO: get this values through env vars
const port = process.env.PORT || 3300;
const uri = 'mongodb://localhost:27017/app';

Promise
  .resolve(mongoose.connect(uri))
  .then(() => {
    console.log('DB connected');
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
