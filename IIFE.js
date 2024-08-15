///////////Immediately invoked Function Expression
//==========there will be no pollution from global scope
((a,b,c)=>(console.log(a+b+c)))(100,100,100);
const a=300;
(
 /////NAMED IFFE
 function chai()
 {console.log(a)}
)
();
let z;
(
z=function ()
{console.log(a)}
)
();
z();
let output=((a,b)=>{console.log(a+b)})(450,450);
// console.log(output)
output=((a,b)=>a+b)(450,450);
console.log(output)