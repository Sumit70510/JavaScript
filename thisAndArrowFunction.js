const obj={
    user:'sumit',
    display:function()
    {console.log(this)}
}
// obj.display()
// console.log(this)

const one=function()
 { const a=300
    console.log(a)
 }
//  one()

 const two = ()=>
 {  
    const b=300
    console.log(this)
 }
//  two()
 const c = (a)=>
    {
    console.log('this is a temperary function known as Arrow Function '+a)
    }
// c(300)

/////////////////////////////implicit return 
const addtwo= (a,b)=> a+b
console.log(addtwo(150,150))

const add2=(a,b)=>{return a+b}
console.log(add2(300,300))

const ad2=(a,b)=>(a+b)
console.log(ad2(400,400))