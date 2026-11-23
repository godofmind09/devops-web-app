const express = require("express");
const app = express();
const port = Number(process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send(`
    <h1>DevOps Assignment - Web App</h1>
    <p>The web server is running.</p>
    <p>Server time: ${new Date().toISOString()}</p>
  `);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`App running on http://0.0.0.0:${port}`);
});
