/* condition 

syntax
if (<condition>) {
    do true casr task
} else {
    not true case task
}
*/

let willRain = false;
let hasProbability = true;

if (willRain) {
    console.log("take umbrella")
}
else {
    if (hasProbability) {
        console.log("you may take it.")
    }
    else {

        console.log("no need");
    }
}

minAge=18
herAge=18
hasConsent=false

if(herAge >=minAge){
if (hasConsent){
   console.log ("she can")
}else{
    console.log("she can't marry")
}
   
}
else{
    console.log("she can't")
}
// short cut of upper case
if  (herAge=minAge && hasConsent) {
    console.log("she can marry")
}
else{
    console.log("she can't marry")
}


/* ternary operator */
/* falsey values */



/* logical operator
AND gate  &&
      both the right hand side value and left hand value should be  true to give the value true 
OR gate  ||
      either the right hand side value or left dside value is true then it  give the value true
NOT gate !
     opposite if true than it makes the value false  or if the value is false then it gives the value is true   
*/


let todos =[
    {
        "id":1,
        "title":"html",
        "completed":true,
    },
    {
        "id":2,
        "title":"css",
        "completed":true,
    },
    {
        "id":3,
        "title":"js",
        "completed":false,
    },
]
let todo1={
        "id":1,
        "title":"html",
        "completed":true,
}

if (todo1.completed){
    console.log(`${todo1.title} is completed`)
 }
 else{
    console.log(`${todo1.title} is pending`)
 }

