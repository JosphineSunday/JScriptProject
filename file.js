var Students = 
[

    {
        name: "Oyekale Tosin",
        age: 16,
        address: "Faringada",
        tribe: "Yoruba",
        gender: "female",
        Height: 2.34,
        department:"CSC",
        level: 400,
        grade: [60,70,80,90,100]
    },
    {
        name:"kaslong Kevin",
        age: 13,
        address:"Twad",
        tribe:"Gamai",
        gender:"male",
        Height:8.34,
        department:"CSC",
        level:200,
        grade: [60,70,80,90,100]
    },
    {
        name:"Mark Adams",
        age: 20,
        address:"Rukuba Road",
        tribe:"Idoma",
        gender:"male",
        Height:5.34,
        department:"CSC",
        level:300,
        grade: [50,70,80,90,100]
    },
    {
        name:"Elizabeth John",
        age: 13,
        address:"Salama Hostel",
        tribe:"ibibo",
        gender:"female",
        Height:8.34,
        department:"CSC",
        level:400,
        grade: [30,40,80,90,100]
    },
    {
        name:"Susan Owoicho",
        age: 13,
        address:"Salama Hostel",
        tribe:"Idoma",
        gender:"female",
        Height:5.56,
        department:"CSC",
        level:300,
        grade: [30,40,60,90,100]
    },
    {
        name:"Yada Martins",
        age: 21,
        address:"Odus",
        tribe:"Kagoro",
        gender:"male",
        Height:6.56,
        department:"CSC",
        level:300,
        grade: [30,40,60,80,100]
    },
    {
        name:"Ifeoma Ibedu",
        age: 13,
        address:"Angwa Rukuba",
        tribe:"Igbo",
        gender:"female",
        Height:5.46,
        department:"CSC",
        level:300,
        grade: [30,40,50,90,100]
    },
    {
        name:"Peter Temitope Asalu",
        age: 20,
        address:"Celebridge",
        tribe:"Yagba",
        gender:"male",
        Height:5.50,
        department:"CSC",
        level:300,
        grade: [30,40,60,70,100]
    },
    {
        name:"Awari Yohanna Duada",
        age: 22,
        address:"Angwa Rukuba",
        tribe:"Afizare",
        gender:"male",
        Height:5.51,
        department:"CSC",
        level:300,
        grade: [30,40,60,80,90]
    },
    {
        name:"Josephine Sunday",
        age: 20,
        address:"Odus",
        tribe:"Eggon",
        gender:"female",
        Height:5.33,
        department:"CSC",
        level:300,
        grade: [30,50,50,90,100]
    },
    {
        name:"Nanbal Moses Kundam",
        age: 23,
        address:"Federal locust",
        tribe:"Mupun",
        gender:"male",
        Height:5.45,
        department:"CSC",
        level:300,
        grade: [30,40,60,100,100]
    },
    {
        name:"Victoria Bok",
        age: 22,
        address:"Oduns",
        tribe:"Berom",
        gender:"female",
        Height:5.52,
        department:"CSC",
        level:300,
        grade: [30,40,80,90,100]
    },
    {
        name:"Yusuf Paul Osanga",
        age: 22,
        address:"Rayfield",
        tribe:"Berom",
        gender:"male",
        Height:5.58,
        department:"CSC",
        level:400,
        grade: [30,70,80,90,100]
    },
    {
        name:"Bamigboye Christiana Temitope",
        age: 25,
        address:"Village Hostel",
        tribe:"Yoruba",
        gender:"female",
        Height:5.52,
        department:"CSC",
        level:300,
        grade: [30,60,80,90,100]
    },
    {
        name:"Job Gift Elejo",
        age: 22,
        address:"Village Hostel",
        tribe:"Igala",
        gender:"female",
        Height:5.51,
        department:"CSC",
        level:300,
        grade: [30,40,50,90,100]
    },
    {
        name:"Moses Deborah Kibba",
        age: 21,
        address:"Oduns",
        tribe:"Berom",
        gender:"female",
        Height:5.32,
        department:"CSC",
        level:300,
        grade: [30,40,80,80,100]
    },
    {
        name:"Joy Ohue Osedebamen",
        age: 20,
        address:"Ring Road",
        tribe:"Esan",
        gender:"female",
        Height:5.52,
        department:"CSC",
        level:300,
        grade: [30,40,60,90,100]
    },
    {
        name:"Ponfa Micheal",
        age: 22,
        address:"Ring Road",
        tribe:"Berom",
        gender:"male",
        Height:5.54,
        department:"CSC",
        level:300,
        grade: [30,40,80,90,100]
    },
    {
        name:"Mabas Maryam",
        age: 20,
        address:"PTS, Jos",
        tribe:"Challa",
        gender:"female",
        Height:5.52,
        department:"CSC",
        level:400,
        grade: [30,40,80,90,100]
    },
    {
        name:"Uzaifat Ibrahim",
        age: 24,
        address:"Dodo street Jos",
        tribe:"Magwavul",
        gender:"male",
        Height:9.52,
        department:"CSC",
        level:300,
        grade: [30,40,80,90,100]
    }


];
//console.log(Students);

//find the tallest in the object
var max=0;
var user;
Students.forEach(function(data,index,array){
	if(max < data.Height){
		max = data.Height;
		user = index;
	}
});

// var printTall = Students.filter((a)=> a.Height==max);

console.log(max,"\n",Students[user]);

var a = 0;
var userA = 0;
Students.forEach(function(value,index,array){
    //console.log(value.grade.reduce((x,y)=>{x+y}));//.reduce(function(x,y){x+y}));
    if(a < value.grade.reduce((x,y)=>x+y)/value.grade.length){
        a = value.grade.reduce((x,y)=>x+y)/value.grade.length;
        userA = index;
    }
    
});
console.log(Students[userA]);
