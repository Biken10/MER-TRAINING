/* 
array 
-collection of different value
-usually it id collection of similar data-types 
*/
// let students =["ram","shyam"] //array of string

let student1 =
    {
        name:"ram",
        phone:1111
    }
    let student2={
        name:"hari",
        phone:2222
    }
    let student3={
name:"shyam",
phon:3333
    }

let student_1=[student1,student2,student3]
console.log(student_1)

let students=[
    {
name:"ram",
phone:"1111"
    },
 {
    name:"shyam",
    phone:"2222"
 },
 {
    name:"hari",
    phone:3333
 }
]

console.log("before the name was "+students[0].name)
students[0].name="ram bdr"

console.log("after the name is "+students[0].name)

console.log("before the name was "+students[2].name)
students[2].name="ram sharma"
console.log("after the name is "+students[2].name)

students[3]={
    name:"krishna",
    phone:4444
}
console.log(students)

// let browsers=[0th,1st,2nd]index


/* output 

ram's phone is 111
hari's phone is 222
ram sharma's phone is 333
*/
console.log(students[0].name +"'s "+"phone is "+students[0].phone)
console.log(students[1].name +"'s "+"phone is "+students[1].phone)
console.log(students[2].name +"'s "+"phone is "+students[2].phone)
console.log(students[3].name +"'s "+"phone is "+students[3].phone)
console.log(`${students[3].name}'s phone is ${students[3].phone}`)



// do  not repeat yurself

let studentes =[{
    roll:1,
    courses:["web","mobile"]
},
{
 roll:2,
 courses:["web","graophic"]
}
]
console.log("before "+studentes[1].courses[1])
studentes[1].courses[1]="mobile"
console.log("after "+studentes[1].courses[1])
console.log(studentes)





