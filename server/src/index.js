const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { formRouter } = require("./routes/form");
const app = express();

app.use(cors());
app.use("/api/v1/", formRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at PORT ${process.env.PORT}`);
});
