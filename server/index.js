// Make express server
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json())

const userRoutes = require("./routes/User");
const BusRouteRoutes = require("./routes/BusRoutes");

const dbURI = "mongodb://127.0.0.1:27017/"
mongoose.connect(dbURI)
  .then((result)=> console.log('connect to db'))
  .catch((err) => console.log(err))

app.use("/user", userRoutes);
app.use("/bus-routes", BusRouteRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
