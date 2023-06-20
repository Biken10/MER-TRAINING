let student1 = {
    index: 0,
    name: "ram",
    phone: 1111,
    country: "usa"
}

let student2 = {
    index: 1,
    name: "Hari",
    phone: 222,
    country: "uk"
}
let student3= {
    index: 2,
    name: "Hari",
    phone: 333,
    country: "nepal"
}
/*ram's phone is 111  */

console.log(student1.name+"'s "+"phone is "+student1.phone)
console.log(student2.name+"'s "+"phone is "+student2.phone)
console.log(student3.name+"'s "+"phone is "+student3.phone)


// console.log("Namaste", name);
// console.log("Hello", name);
// console.log("Nihao", name);
// console.log("Konichiwa", name);
// let name="jihn"
// function greetHim(greeting) { // let greeting = Namste
//     console.log(greeting, name);
// }

// greetHim("Namste")
// greetHim("Hello")
// greetHim("Nihao")

let person1="john"
let person2="shyam"
let person3="ram"
function greetpeople(greeting)
{
    console.log (greeting,person1,"",greeting,person2,"",greeting,person3)
}

greetpeople("hello") //hello here is arguement
greetpeople("hello")
greetpeople("hi")


 /*create a function generateEvenNumber
 and if we pass an argument 10,
 then outputshoult be 2,4,6,8  */

 function generateEvenNumber(n){
    if(n%2==0){
        console.log(`the ${n}is an even number`)
    }
   else if(n%2==1){
        console.log(`the ${n}is an odd number`)
    }
    else{
        console.log("others")
    }
 }
 generateEvenNumber(2)
 generateEvenNumber(1)
 generateEvenNumber("me")


 






