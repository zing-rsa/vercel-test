const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/testroute", (req, res) => res.send("heres a route bru"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;