const express = require('express');
const app = express();

const PORT = 3000;

app.use(require('./router'));

app.listen(process.env.PORT || PORT, () => {
  console.log(`node runnig on port ${PORT}`);
});
