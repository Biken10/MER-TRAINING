let persons =[
    {name:"ram"},
    {name:"ram"},
    {name:"ram"},
    {name:"ram"},
    {name:"ram"},
]


function doTaskOne() {
    console.log("do task one");
    doTaskTwo()
    console.log("after task  one");

}

function doTaskTwo() {
    console.log("do task two");
}

doTaskOne()

function doSomething(){
    console.log("do somethings")
    return 1212
}
/*callback
 -a function pASsed an argument to another function
    */
   

 persons.forEach((el, index) => {
    // let country = countries[index]
    console.log(el, index)
})


// console.log(1);