/*
function

Syntax
function <functionName>(){
    write some task;
}
call function 

*/

//calculateDiff

// console.log(`(10-2)*2=`,(10-2)*2);
// console.log(`(10-2)*2=`,(10-2)*2);
// console.log(`(10-2)*2=`,(10-2)*2);
// console.log(`(10-2)*2=`,(10-2)*2);

function DiffAndMultiply(num1,num2,multiplyBy ) {
    console.log("num1",num1)
    console.log("num2",num2)
    console.log(`(${num1}-${num2})*${multiplyBy}=${(num1-num2)*multiplyBy}`);
   console.log("\n") //space aauxa 
}
//call /execute/run

DiffAndMultiply(10,5,3) //10,5 argument or parameter
DiffAndMultiply(7,2,6)
DiffAndMultiply(8,5,3)

// console.log("hello")
//spread operator

let dbUsers =[]
// dbUsers[0]="ram"
// dbUsers[1]="shyam"
// console.log(dbUsers)


 /* signup 
 -create function name 
 -create two parameter ,name and email 
 -after retrievijg name  and email create the new user object with name and email properties/key
 -addd this new object to old dbUsers
 */

 function signUp(name,email) {
    console.log("add user to dbUsers")
let user ={
    name:name,
    email:email
}
// dbUsers[dbUsers.length]=user
dbUsers.push(user)
 }
signUp("ram","rsm@gmail.com")
signUp("ram","rsm@gmail.com")
signUp("ram","rsm@gmail.com")

console.log(dbUsers)
