const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 4000;

const datas = new Date();

// current date
const date = datas.getDate();
 
// current month
const month = datas.getMonth()+1;
 
// current year
const year = datas.getFullYear();
 
// current hours
const hours = datas.getHours();
 
// current minutes
const minutes = datas.getMinutes();
 
// current seconds
const seconds = datas.getSeconds();

const data = `The Current timestamp is Date(${year}-${month}-${date}), Indian Standard Time(${hours}:${minutes}:${seconds})`;


fs.writeFile("./timestamps/current-date-time.txt", data, (err)=>{
    console.log("File created");
});

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.get("/currenttimestamp", function(req,res){
  res.send(data);
})

app.listen(PORT, ()=> console.log(`The server started in: ${PORT} ✨✨`));
