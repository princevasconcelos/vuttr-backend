const express = require("express");
const app = express();

const PORT = 3000;

app.get("/tools", (req, res) => {
  res.status(200).send({ msg: "showing all tools" });
});

app.get("/tools/:search", (req, res) => {
  res.status(200).send({
    msg: "1 result found"
  });
});

app.post("/tools", (req, res) => {
  res.status(201).send({
    msg: "created"
  });
});

app.delete("/tools/:id", (req, res) => {
  res.status();
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`node runnig on port ${PORT}`);
});
