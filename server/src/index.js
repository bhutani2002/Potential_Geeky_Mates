const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { formRouter } = require("./routes/form");
const app = express();

app.use(cors({
    origin: ['https://deploy-mern-1whq.vercel.app'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT'], // Specify the allowed HTTP methods
  }));
app.use(express.json());
app.use("/api/v1/", formRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at PORT ${process.env.PORT}`);
});
