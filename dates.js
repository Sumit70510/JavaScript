const mydate=new Date()
console.log(mydate);
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toTimeString())
// console.log(mydate.valueOf())


let mycreateddate= new Date(2024,6,28);
// console.log(mycreateddate.toLocaleString())
// let mycreateddate1=new Date("07-27-2024");
// console.log(mycreateddate1);

let mytimestamp=Date.now();

console.log(mytimestamp);
console.log(mycreateddate);
console.log(mycreateddate.getMonth()+1)


console.log("time in seconds :" + Math.floor(mytimestamp/1000));