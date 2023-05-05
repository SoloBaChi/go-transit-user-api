



const express = require("express");
const connectDB = require("./backend/database/connection");
const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

//core middlewares
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

//configure env file
dotenv.config({ path: ".env" });
connectDB();

app.use("/", require("./backend/routes/user-routes"));

app.get("/", (req, res) => {
  res.json("hello client");
});

const PORT = process.env.PORT || 4000;
exports.start = () => {
  app.listen(PORT, () => {
    console.log(`Server Listening to port ${PORT} rn`);
  });
};

