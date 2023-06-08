
// let fruits=["apple","banana","orange"]

// console.log(fruits)
/*array 
     let <variableName>=[element,element2,element3]
     let <variableName=[0th index,1st,2nd]

     INDEX
       -ALWAYS STARTS WITH 0
      */
     let fruits=["apple","banana","orange"]

     console.log(fruits[2])
     fruits[3]="pineapple"
     console.log(fruits[3]);
    

     let colors =[
        {
            color:"white",
            hexValue:"#FFFF"
        },
        {
            color:"black",
            hexValue:"#000000"
        },
        {
            color:"teal",
            hexValue:"#008080"
            }
    ]
colors[0].hexValue="#FFFFFF";
console.log("the hexValue of "+colors[0].color +" is " +colors[0].hexValue);


    console.log("the hexValue of "+colors[2].color + " is "+ colors[2].hexValue)

    colors[0].rgb="rgb(255,255,255)"
    colors[1].rgb="rgb(255,255,0)"
    colors[2].rgb="rgb(255,0,255)"

    colors[3] ={
        color:"black",
        hexValue:"#000000"
    }

    console.log(colors);