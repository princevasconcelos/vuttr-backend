const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./config/mongo');

const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(require('./router'));

app.listen(process.env.PORT || PORT, () => {
  console.log(`node runnig on port ${PORT}`);
});

module.exports = app;
