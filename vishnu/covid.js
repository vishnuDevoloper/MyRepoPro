const { readFileSync } = require("fs");
const { createServer } = require("http");
const { join } = require("path");
const app = createServer();
const PORT = 4000;
const hostName = '127.0.0.8';

app.on('request',(req,res)=>{
        const {url} = req;
        console.log(url);
    if(url === "/"){
        res.end(readFileSync(join(__dirname,"html","covid.html"),"utf-8",(err,data)=>{
            if(data){
                res.end(data);
            }else{
                console.log("Sorry Unable To Process");
            }
        }
    ))
    } else if (url === "/css/covid.css"){
        res.end(readFileSync(join(__dirname,"css","covid.css"),"utf-8",(err,data)=>{
            if(data){
                res.end(data);
            } else{
                console.log("Sorry Unable To Process");
            }
        }
    ))
    }
})


app.listen(PORT,hostName,()=>{
    console.log(`Server Started With ${hostName}:${PORT}`);
});