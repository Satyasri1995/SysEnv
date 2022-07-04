const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "dist/SysEnv")));

app.use("/",(req,res)=>{
  res.sendFile(path.join(__dirname, "dist/SysEnv/index.html"))
})


app.listen(3000, () => {
  console.log("App started")
});
