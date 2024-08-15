const mysym= Symbol("key1")
const jsuser={
    id:'123abc',
    [mysym]:'key2',
    obj2:{
        obj3:
        {
            name:'sumit'
        }
    }
}
console.log(jsuser['id'])
console.log(jsuser[mysym])
Object.freeze(jsuser);
jsuser['id']=123
console.log(jsuser['id'])
console.log(jsuser.obj2?.obj4?.name)
const obj4={
    a:1
}
const obj5={
    b:2
}
const temp=Object.assign({},jsuser,obj4,obj5)
console.log(temp)
const temp2={...jsuser,...obj4,...obj5}
console.log(temp2)

console.log(Object.keys(jsuser))
console.log(Object.values(jsuser))

const arr=Object.entries(jsuser)
console.log(arr)

console.log(jsuser.hasOwnProperty('obj2'))
console.log(jsuser.obj2.hasOwnProperty('obj3'))

/////////destructuring

const course=
{
    coursename:'MERN',
    price:999,
    courseInstructor:'Sumit'
}

const { courseInstructor }=course;
console.log(courseInstructor)
const {courseInstructor:teacher}=course
console.log(teacher)