//Install express server
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/CV-Generator"));

app.Get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/CV-Generator/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);