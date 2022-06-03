const express = require("express");
const app = express();
let PORT = 8000
let log = console.log
const rappers = {
    "21savage": {
        "age": 29,
        "birthname": "Sheya Bin-Abraham Joseph",
        "birthLocation": "London England"
    },
    "chancetherapper":{
        "age": 29,
        "birthname": "Chancelor Bennet",
        "birthLocation": "Chicago Illinois"
    },
    "unknown":{
        "age": 0,
        "birthname": "unknown",
        "birthLocation": "brooklyn"
    }
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/hello.html')
});
app.get("/api:name", (req, res) => {
   const rapperName = req.params.name.toLowerCase()
  
   if(rappers[rapperName]){
    res.json(rappers[rapperName])
   }else{
    res.json(rappers["unknown"])
   }
    
});


app.listen(PORT | 8000, () => {
    log(`Server is listening on port ${PORT}`)
})