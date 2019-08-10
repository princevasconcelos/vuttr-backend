const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = 3000;

mongoose.connect(
    'mongodb+srv://princevasconcelos:princevasconcelos@cluster0-t4dtv.mongodb.net/tools?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
    }
);

app.use(require('./router'));

app.listen(process.env.PORT || PORT, () => {
  console.log(`node runnig on port ${PORT}`);
});
