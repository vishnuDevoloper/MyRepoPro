const { readFileSync, readFile } = require('fs');
const {join}=require('path')
const {insertOne, deleteUser,updateData}=require('./js/insertServer')
const http=require('http')
const port=5000;
const hostname="127.0.0.8";
const app=http.createServer()
app.on('request',(req,res)=>{ 
    const {url,method}=req;
    // console.log(url);
    const userID = Number(url.split('/')[2]);
    // console.log(userID);
   
    if(url === '/' || url==='/form.html'){
               readFile(join(__dirname,"html",'form.html'),'utf-8',(err,data)=>{
                    if(err){
                        console.log(err)
                    }else{
                       res.end(data)
                    } 
               })


    }else if(url.split('/')[1] === 'user')
    {
      if(method === 'POST')
      {
           req.on('data',(user)=>{
                //  console.log(user.toString())
                try{
                   let final=insertOne(JSON.parse(user.toString()))
                   console.log(final)
                // alert(final)
                    res.statusCode=200;
                    // res.end(JSON.stringify({msg:"data stored in database"}))
                    res.end(final)
                }
                catch(err){
                    res.end('')
                }
           })
      }
      else if(method === "DELETE")
      {
        res.end(JSON.stringify({
            msg:"User Deleted in db",
            allData: deleteUser(userID)
        }));
      }
      else if(method === 'PATCH'){
        console.log("hello");
        req.on('data',(user)=>{
        if(updateData(JSON.parse(user.toString())))
        res.end(readFileSync(join(__dirname,'db','data.json')),'utf-8')
        })
        
    }
    }
    else if(url === '/admin.html'){
        console.log(url)
        readFile(join(__dirname,"html",'admin.html'),'utf-8',(err,data)=>{
            if(err){
                console.log(err)
            }else{
               res.end(data)
            } 
        })

    }
    else if(url === '/db/data.json'){
        res.end(readFileSync(join(__dirname,'db','data.json')),'utf-8')
    }
    else{
        res.end('')
    }

})

// app.on('request',(req,res)=>{
//     // if(req.url === '/mani'){
//     //    res.end("<h1>Hello world )</h1>")
//     // }
//     const {url}=req;
//     console.log(url);
//        if(url === '/'){
//            readFile(join(__dirname,"html",'navbar.html'),'utf-8',(err,data)=>{
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 res.end(data)
//             }
//            })
//        }
//        else if(url ==='/css/style.css'){
//         readFile(join(__dirname,"css",'style.css'),'utf-8',(err,data)=>{
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 res.end(data)
//             }
//            })

//        }
//        else if(url === 'favicon.ico' ){
//         res.end('')
//        }
//        else{
//         readFile(join(__dirname,"html",'pageNotFound.html'),'utf-8',(err,data)=>{
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 res.end(data)
//             }
//            })

//        }

   

// })
app.listen(port,hostname,()=>{
    console.log(`${hostname}:${port} server started`)
})