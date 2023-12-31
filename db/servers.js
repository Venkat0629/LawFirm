var express = require("express");
var app = express();
var bodyParser = require("body-parser"); // require body-parser for handling POST requests
var fs = require("fs");

app.use(bodyParser.json()); // use JSON body parser

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("REST API app listening at http://%s:%s", host, port);
});

// Endpoint to Get all data
app.get("/getUsers", function (req, res) {
  fs.readFile(__dirname + "/users.json", "utf8", function (err, data) {
    console.log(data);
    res.end(data);
  });
});

// Endpoint to add a user
app.post("/addUser", function (req, res) {
  fs.readFile(__dirname + "/users.json", "utf8", function (err, data) {
    var jsonData = JSON.parse(data);
    var newUser = req.body; // Assuming the incoming data is a JSON object representing the new user

    // Add the new user to the data
    jsonData["user" + Object.keys(jsonData).length + 1] = newUser;

    // Save the updated data back to the file
    fs.writeFile(
      __dirname + "/users.json",
      JSON.stringify(jsonData),
      "utf8",
      function (err) {
        if (err) {
          console.error(err);
          res.status(500).send("Error writing to data.json");
        } else {
          console.log("User added successfully");
          res.end(JSON.stringify(jsonData));
        }
      }
    );
  });
});

// Endpoint to get user by id
app.get("/getUsers/:id", function (req, res) {
  fs.readFile(__dirname + "/users.json", "utf8", function (err, data) {
    var users = JSON.parse(data);
    var user = users["user" + req.params.id];
    console.log(user);
    res.end(JSON.stringify(user));
  });
});

// Endpoint to delete a user by id
app.delete("/deleteUser/:id", function (req, res) {
  fs.readFile(__dirname + "/users.json", "utf8", function (err, data) {
    var jsonData = JSON.parse(data);
    var userId = req.params.id;

    // Check if the user exists before deleting
    if (jsonData["user" + userId]) {
      delete jsonData["user" + userId];

      // Save the updated data back to the file
      fs.writeFile(
        __dirname + "/users.json",
        JSON.stringify(jsonData),
        "utf8",
        function (err) {
          if (err) {
            console.error(err);
            res.status(500).send("Error writing to data.json");
          } else {
            console.log("User deleted successfully");
            res.end(JSON.stringify(jsonData));
          }
        }
      );
    } else {
      res.status(404).send("User not found");
    }
  });
});
