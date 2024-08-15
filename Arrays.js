let arr=[1,2,3,4,5,6]
let arr2= new Array('a','b','c')
console.log(arr)
console.log(arr2)
console.log(typeof(arr))
console.log(typeof(arr2))
let temp=arr.join()
console.log(temp)
console.log(typeof(temp))

let s1=arr.slice(1,3)
console.log("Slice Function Here -> "+s1)
arr[0]=40;
console.log(arr)
console.log(s1)
console.log(typeof(arr))

let s2=arr.splice(1,3)
console.log("Splice Function Here -> "+s2)
console.log(arr)

arr.unshift(2)
arr.unshift(1)
console.log(arr)
arr.shift()
console.log(arr)


////////splice function

let myarr=[1,2,3,4,5,6,7,8,9]
console.log(myarr)
let s3=myarr.splice(3,5);

console.log(s3);
s3.pop();
console.log(s3);
