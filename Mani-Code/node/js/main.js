const {join}=require('path')
const {writeFile, readFile,writeFileSync,readFileSync}=require('fs')
const { stringify } = require('querystring')

// const users=[{
//     name:"mani",
//     age:23,
//     gender:"male"
// }]   

// writeFile(join(__dirname,"..","db","data.json",),JSON.stringify(users),'utf-8',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("path ok")
//     }
// })

// function insertOne(user){
//          readFile(join(__dirname,"..","db","data.json"),'utf-8',(err,data)=>{
//            if(err){
//                console.log(err)
//            }
//            else{
//             const users=[...JSON.parse(data),user]
//             writeFile(join(__dirname,"..","db","data.json"),JSON.stringify(users),'utf-8',(err)=>{
//                 if(err){
//                     console.log("enter correct path");
//                 } 
//                 else {
//                     console.log("json created")
//                 }

//             })

//            }
//          })

// }
// insertOne({name:"tejas",id:143,gender:"male"})

// function insertMany(user){
//     readFile(join(__dirname,"..","db","data.json"),'utf-8',(err,data)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             const users=[...JSON.parse(data),...user]
//             writeFile(join(__dirname,"..","db","data.json"),JSON.stringify(users),'utf-8',(err)=>{
//                 if(err){
//                     console.log("enter correct path");
//                 } 
//                 else {
//                     console.log("json created")
//                 }

//             })

//            }
//          })

// }
// insertMany([{name:"praveen",id:123,gender:"male",},{name:"raji",id:234,gender:"female"},{name:"sravani",id:345,gender:"female"}])


/////SYNC //////

function getData(){
   let data= readFileSync(join(__dirname,"..","db",'data.json'),'utf-8');
   let users=JSON.parse(data)
   return users;
}
function insertOne(data){
   let tejas = [...getData()]
   writeFileSync(join(__dirname,"..","db",'data.json'),JSON.stringify(tejas),'utf-8')

}
