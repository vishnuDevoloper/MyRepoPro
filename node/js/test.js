// const fs=require('fs');
// let value=`let a=10;
// let b=5;
// console.log(a*b)`

const fs=require('fs');
const data=`<p>Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension. 

Students have a lot of questions when it comes to writing a paragraph: How many sentences should you use? How do you transition within a paragraph? When do you end a paragraph? Etc. Below we explain everything you need to know about paragraph structure to write like an expert,</p>`

console.log("start execution Rocky")

try{
   let value=fs.readFileSync('../html/tejas.html',) 
   console.log(value)
}
catch(err){
    fs.writeFileSync('../html/tejas.html',data,'utf-8')
    console.log("succesfully created")
}
console.log("end execution Rocky")



