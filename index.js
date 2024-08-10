const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
app.listen(port);

app.get("/api/umm", (req, res) => res.json({ name: "엄준식", isAlive: true }));
