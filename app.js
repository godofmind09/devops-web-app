const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>DevOps Assignment - Web App</h1>
    <p>This app is running in Docker on AWS EC2!</p>
    <p>Server time: ${new Date().toISOString()}</p>
  `);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`App running on http://0.0.0.0:${port}`);
});
