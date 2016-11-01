if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
 }

const express = require('express');
const app = express();
const db = require('./config/db');
const routes = require('./routes/index');
app.use('/', routes);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
