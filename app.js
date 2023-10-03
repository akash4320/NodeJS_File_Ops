const express = require("express");
const app = express();

const fileRouter = require('./routes/FileRoutes');

//middleware
app.use(express.json());
app.use("/file", fileRouter);

app.listen(3004, () => {
  console.log("Server is running on port 3004");
});
 
module.exports = app;