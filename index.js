const express = require("express");
const app = express();

// This line is important to ensure your app listens to the PORT env var
const port = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
