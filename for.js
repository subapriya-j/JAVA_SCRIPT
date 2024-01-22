//for of loop
a=[10,"string",20,true,false]
for(const index of a){
    console.log(index)
}
//for each
a=[10,"string",20,true,false]
a.forEach(value =>{
    console.log(value)
})
a=[10,"string",20,true,false]
for(const value in a){
    console.log(value)
}
setExample=new Set(["eat","sleep","drink"])
for (const value of setExample){
    console.log(value)
}
setExample.add("walk")
console.log(setExample)
//map

mapEx=new Map([["id","202ECR123"],["name","Tamil"]])
for (const value of mapEx)
{
    console.log(value)
}
console.log(mapEx)
console.log(mapEx.has("name"))
mapex =new Map([["id","21ECR206"],["name","Tamil"]])
console.log(mapex)
mapex.set("age","20")
mapex.set("phonenumber","98765433114")
console.log(mapex)
mapex.delete("phonenumber","9876543314")
console.log(mapex)

