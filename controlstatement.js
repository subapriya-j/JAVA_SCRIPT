//For Loop
var sum=0
for(var i=0;i<10;i++)
{
    sum+=i
}
console.log(sum)
//while loop
var i=0
while(i<10)
{
    sum+=i
    i++
}
console.log(sum)
//do while
var i=0
do{
    
    sum+=i
    i++
}
while(i<10)
console.log(sum)
//example1
arr=[10,20,30]
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]) 
}
//example2
arr=[10,20,30.5]
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]) 
}
//example3
arr=[10,20,true,false]
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]) 
}
//example4
arr=[10,20,"string","kongu",20,true]
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]) 
}