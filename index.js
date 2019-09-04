//console.log("Hello world");

// var salutation = "Welcome to UJhub university of jos.";
// console.log(salutation);
// salutation = 100;
// console.log(salutation);
// var list = [
//     "josephine",
//     true,
//     100
// ];
// console.log(list[0])
// console.log(list[1])
// list.forEach((value)=>{
//     console.log(value)
// })
// var age = list.filter((value) => value == 100);// dont use braces for one line cose
// console.log(age);

// var ages = [
//     15,17,20,25,30,40,50,60,70,80];

//     var ValidAges = ages.filter((age) => age > 18);
//     console.log(ValidAges);

var me = {
    name: "Josephine",
    age: 30,
    Department: "Computer Science",
    level: 300,
    grade: [35,40,45,68,]
};
console.log(me.name);
console.log(me.age);
console.log(me.grade[0]);

var Students = 
[
    {
        name: "Josephine",
        age: 30,
        Department: "Computer Science",
        level: 600,
        grade: [35,70,12,68,]
    },
    {
        name: "Joy",
        age: 10,
        Department: "Computer Science",
        level: 300,
        grade: [23,67,15,98,]
    },
    {
        name: "Gift",
        age: 20,
        Department: "Computer Science",
        level: 300,
        grade: [25,30,35,98,]
    }
];
var StudentsAge = Students.filter((Students)=>Students.name.includes("Joy"));
console.log(StudentsAge);

StudentsAge.forEach(s=>{
    console.log(s.name);
});