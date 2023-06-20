let dbUsers = []


function signUp(name, email, password) {
    console.log("add to dbUsers")
    dbUsers.push ({
        "name": name,
        "email": email,
        "password": password
    })
}

signUp("rsm","email","password")
signUp("rsm","email","password")
signUp("rsm","email","password")

 console.log(dbUsers)


  function hassPassword(password){
    console.log("AJIHDIJHDUIFI")

}
hassPassword("hsbddshasjdhjsdajhdsassdssjssashjjjsjjjsjj")
hassPassword("hsbddshasjdhjsdajhdsassdssjssashjjjsjjjsjj")


function sum(num1,num2) {
    return num1 +num2
}
console.log("sum is",sum(1,2))
console.log("sum is",sum(12,21))


/* hoisting  */
 
deleteUser()

function deleteUser(){
    console.log("user has been delte..");
}

console.log({name})
let name="ram";
