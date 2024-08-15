function addtwonumbers(num1,num2=100)
 {
    console.log(num1+num2);
    // console.log(typeof(num1+num2));
    return (num1+num2)
}
//  addtwonumbers(50,90)
//  addtwonumbers()
//  addtwonumbers(100)
//  addtwonumbers(100,'a')
//  addtwonumbers(100,null)
//  const result=addtwonumbers(100,200)
//  console.log(result)
function CalculateCartPrice(num2,...num1)
{
//console.log(...num1) 
  return num2
}

// console.log(CalculateCartPrice(100,200,300))

/////////passing object in a function
const user={
    username:'Sumit'
    ,pin:1243
}
function handleobject(anyuser)
 {
    console.log(`the username is ${anyuser.username} ans password is ${anyuser.pin}`)
 }

handleobject(user) 
handleobject({
    username:'Sumit verma',
    pin:42311
}) 

///////////passing arrays in function
const arr= [100,200,300]

function handleArray(array)
{
 return array[2]
}

console.log(handleArray(arr))


//////////////scope
let z
function one()
 {
    let user='sumit'
    console.log('inside one')
    z=function two()
    {
         console.log('inside two')
        console.log(user)
     }
    // two() 
 }

 one()
 z()

 const a=300
 const temp=function()
  {
   console.log(a)
  }
 temp()