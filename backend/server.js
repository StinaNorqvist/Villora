const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(express.static("public"));
const port = 3000;

const houseRoutes = require('./routes/house')
const styleRoutes = require('./routes/style')
const userRoutes = require('./routes/user')

app.use(houseRoutes)
app.use(styleRoutes)
app.use(userRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

