const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { formRouter } = require("./routes/form");
const app = express();

// app.use(cors({
//     origin: ['https://deploy-mern-travel-buddies.vercel.app'],
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT'], // Specify the allowed HTTP methods
//   }));

app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin: true');
  res.header("Access-Control-Allow-Origin", "https://deploy-mern-travel-buddies.vercel.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.options("*", (req, res) => {
  res.sendStatus(200); // Pre-flight request response
});

app.use(express.json());
app.use("/api/v1/", formRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at PORT ${process.env.PORT}`);
});
