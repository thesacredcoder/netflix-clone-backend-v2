const { urlencoded } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const moviesRoute = require("./routes/movies");
const listsRoute = require("./routes/lists");

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/lists", listsRoute);

app.listen(8800, () => {
  console.log("Server is running");
});
