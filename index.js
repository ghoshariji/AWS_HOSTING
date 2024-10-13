const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  return res.status(201).send({
    message: "Hello from the server side",
    success: true,
  });
});

app.listen(5000, () => {
  console.log("Sever Start");
});
