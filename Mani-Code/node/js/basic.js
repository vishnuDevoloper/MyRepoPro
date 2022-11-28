const fs=require('fs');
const {copyFile,link,appendFile,unlink}=require('fs')

// console.log("print"+__dirname)

// fs.writeFileSync("../nhb/index.html","<h1>Hello World :)</h1>",'utf-8');    
// console.log("succesfully created index file in html folder")
  

// fs.writeFile("../html/home.html","<h1>Hello World :)</h1>",'utf-8',(err)=>{
//  if(err){
//     console.log(" cant create file")
//     console.log(err)
//  }
//  else{
//     console.log("succsefully created file")
//  }
// })



// fs.readFile("../html/mani.html",(err,data)=>{
//     if(err){
//         console.log("cant read")

//     }
//     else{
//         console.log(data.toString())
//     }
// })




//////  SYNCHRONOUS //

// let data=fs.readFileSync('../html/tejas.html','utf-8');
// console.log(data);

////// ASYNCHRONOUS //////

// console.log("start")
// fs.readFile('../html/tejas.html',(err,data)=>{
//     if(err){
//         console.log(err)
//         console.log("file not created")
//     }
//     else{
//         console.log(data.toString())
//     }
// })
// console.log("end")


///// MAKE DIRECTORY ///////
// fs.mkdirSync('../kishore')

///// ASYNC //////
// fs.mkdir("../kishore",(err)=>{   
//     if(err){
//         console.log("not created")
//     }
//     else{
//         console.log("created")
//     }
// })

///// COPYFILE //////
// fs.copyFile("../html/tejas.html","../html/home.html",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("file copied")
//     }
// })

/////LINK ///////

// link("../html/tejas.html","../css/mani.css",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("link success")
//     }
// })

////APPENDFILE /////
// appendFile("../html/home.html","this is main paragraph",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("attach succes")
//     }
// })

/////UNLINK //////
unlink("../css/mani.css",(err)=>{
    if(err){
                console.log(err)
            }
            else{
                console.log("attach succes")
            }
        })
