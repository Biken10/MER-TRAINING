let persons =[
    {name:"ram"},
    {name:"ram"},
    {name:"ram"},
    {name:"ram"},
    {name:"ram"},
]
function doSomething(){
    console.log("do somethings")
}
/*callback
 -a function pASsed an argument to another function   */
persons.forEach(doSomething)