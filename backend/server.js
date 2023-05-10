const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const start = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/contact");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
start();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
// app.use(express.static("public"));

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

const port = 3000;

const houseRoutes = require("./routes/house");
const styleRoutes = require("./routes/style");
const userRoutes = require("./routes/user");
const materialRoutes = require("./routes/material");
const orderRoutes = require("./routes/order");
const favoriteRoutes = require("./routes/favorite");
const houseMaterialRoutes = require("./routes/houseMaterial");
const contactRoutes = require("./routes/contact");

app.use(
  houseRoutes,
  styleRoutes,
  userRoutes,
  materialRoutes,
  orderRoutes,
  favoriteRoutes,
  houseMaterialRoutes,
  contactRoutes
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
