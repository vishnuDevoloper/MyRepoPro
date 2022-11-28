const {readFileSync,writeFileSync}=require('fs')
const {join}=require('path')

function getData(){
//   let data=readFileSync(join(__dirname,"..","db",data.json),'utf-8')
//   let users=JSON.parse(data)
//   return users;
  try{
    return   JSON.parse(readFileSync(join(__dirname,"..","db","data.json"),'utf-8'))
  }
  catch(err){
   return writeFileSync(join(__dirname,"..","db","data.json"),JSON.stringify([]),'utf-8')
  

  }
}

function insertOne(data){
  
        // let tejas= [...getData(),data]        
        const db=getData();
        data.id = db[db.length-1] ? db[db.length-1].id+1 : 1;
        
        if(isPresent(db,data.aadhar)){
          return "u already registerd for covid vaccine"
        }else{
        writeFileSync(join(__dirname,"..","db","data.json"),JSON.stringify([...db,data]),'utf-8')
        return "data stored in db"
        }
}
// insertOne({name:"mani",id:123})

function isPresent(db,id){
  for(let i=0; i< db.length; i++){
    if(db[i].aadhar ===id) return true;
  }
  return false;
}

function deleteUser(id) {
    allData = getData();
  let result = allData.filter(item =>{ return item.id!==id})
  writeFileSync(join(__dirname,"..","db","data.json"),JSON.stringify(result),'utf-8')
  return getData()
}

function updateData(user){
  let data = getData();
 writeFileSync(join(__dirname,'..','db','../db/data.json'),JSON.stringify(
      data.map((val)=>{
       if(val.aadhar === user.aadhar){
          return {...val,firstname:user.firstName,lastname:user.lastName,eMail:user.eMail,date:user.date,age:user.age,phoneNo:user.phoneNo,aadhar:user.aadhar,pAddress:user.pAddress}
       }
       else 
       return val;
      })),'utf-8')
  return true;
}



function insertMany(user){
    // let tejas= [...getData(),...user]
    const db=getData();
    if(isPresent(db,user.aadhar)){
      
      return "u already registerd for covid vaccine";``
    }else{
      user.id=db[db.length-1].id+1;
       writeFileSync(join(__dirname,"..","db","data.json"),JSON.stringify([...db,user]),'utf-8')

       return "data stored db";

    }
   
}
// insertMany([{name:"mani",id:123},{name:"mani",id:123},{name:"mani",id:123}])
module.exports={insertOne,insertMany,deleteUser,updateData}

