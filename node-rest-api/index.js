
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();
// console.log(process.env.MONGO_URL);
mongoose.connect(
    process.env.MONGO_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
      useFindAndModify: false }, 
    () => {
        console.log("Connected to MongoDB");
    }
);
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});
//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

// app.get("/", (req, res) => {
//     res.send("Welcome to HomePage");    
// });

// app.get("/users", (req, res) => {
//     res.send("Welcome to users");
// });

app.listen(8000, () => {
    console.log("Backend server is running!");
});
//express mongoose dotenv helmet morgan nodemon