/* callback
 -a function passed as argument to another function 
 - call me back 
  */

function doTaskOne(callback) {
    console.log("task one")
    for (let index = 0; index < 10; index++) {
        console.log("index", index);
    }

    callback()
}
const doTaskTwo = () => {
    console.log("task two")
}
doTaskOne(doTaskTwo)