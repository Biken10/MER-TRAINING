// object   
// let <objectName={}


let room = {
    color: "white",
    windowCount: 2,
    dimension: {
        length: 10,
        width: 10,
        height: 10,
    }
}

let rooms = [
    room1 = {
        color: "white",
        windowCount: 3,
        dimension: {
            length: 10,
            width: 20,
            height: 29,
            unit: "metre"
        }
    }
    , room2 = {
        color: "white",
        windowCount: 3,
        dimension: {
            lenth: 10,
            width: 20,
            height: 29,
            unit: "metre"
        }
    }
    , room3 = {
        color: "white",
        windowCount: 3,
        dimension: {
            lenth: 10,
            width: 20,
            height: 29,
            unit: "metre"
        }
    }
];
console.log("room1's length is "+room1.dimension.length)
// console.log(rooms);

let teacher1={
name:"xyz",
phone:1222,
adddres:"kanaki"
}
console.log(teacher1.name + "'s number is "  +teacher1.phone)


let courses = [
    {
        title: "web", 
         duration: "1.5months",
          teacher1:teacher1
     , Price: "15k"
    },
    {
        title: "python",
        duration: "2months",
        teacher: {
            name: "AXyz",
            phnNmbr: 9849,
        }
        , Price: "15k"
    },
    {
        title: "mern",
        duration: "3months",
        teacher: "xyz",
        Price: "15k"
    },
]
// console.log(courses)

