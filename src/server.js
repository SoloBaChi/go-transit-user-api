const express = require("express");
const connectDB = require("./database/connection");
const { json, urlencoded } = require("body-parser");
// const cors = require("cors");
const dotenv = require("dotenv");
const useRouter = require("./routes/user-routes");

//core middlewares
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
// app.use(cors());

//configure env file
dotenv.config({ path: ".env" });
connectDB();

app.use("/",useRouter);

app.get("/",(req,res)=>{
res.json("welcome user")
})

const PORT = process.env.PORT || 4000;
exports.start = () => {
  app.listen(PORT, () => {
    console.log(`Server Listening to port ${PORT} rn`);
  });
};

