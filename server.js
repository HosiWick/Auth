const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE_LOCAL;
mongoose.connect(DB).then((con) => {
  console.log(DB);
});

const port = 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
