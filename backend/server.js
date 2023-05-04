const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(express.static("public"));
const port = 3000;

const houseRoutes = require("./routes/house");
const materialRoutes = require("./routes/material");

app.use(houseRoutes, materialRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
