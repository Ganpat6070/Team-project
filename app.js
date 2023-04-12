const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const user = require("./model/user")
const cookieParser = require("cookie-parser");
const cors = require("cors");
const profile = require("./model/profile");
const url =
  "mongodb+srv://ganpat:ganpat@cluster0.yleqvvq.mongodb.net/?retryWrites=true&w=majority";
const app = express();
const routes = require("./routes/user.routes")

app.use(cookieParser());
app.use(bodyParser.json({limit : '100mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Method", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true)
  next();
})

app.use(routes)

mongoose.set("strictQuery", false);
mongoose.connect(url, { useNewUrlParser: true },

  app.listen(8000, () => { console.log("Server started on port 8000.") })

);
