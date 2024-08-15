const newobj={
    a:1
}
newobj.display=function () {
    console.log("new function"+this.a)
}
// console.log(newobj.display())

///////creating a object using function constructor

function car(a,b,c)
 {
    this.a=a;
    this.b=b;
    this.c=c;
    this.display=function()
     {
        console.log(a+' '+b+' '+c)
     }
 }
let car1=new car('hyundai','i20',2019)
let car2=new car('honda','city',2019)

// console.log(car1)

// car1.display()
// car2.display()

for(let prop in car1)
  {
    console.log(prop+':'+car1[prop]+'<br>')
  }

///////creating a object using class constructor

class helicopter 
{
   constructor(make,model,year)
    {
        this.make=make
        this.model=model
        this.year=year
        this.display=function()
         {
console.log(this.make+' '+this.model+' '+this.year)            
         }
    } 
}

let h1=new helicopter('tata','A1',2020)
// h1.display();
// console.log(h1)