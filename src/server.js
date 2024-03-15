require('dotenv').config();
const express = require('express'); // common js
const path = require('path'); // common js
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web.js');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config templates engine
configViewEngine(app);

// khai bao route
app.use('/', webRoutes);


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})