// var a=new Date();
// var d=a.getDay();
// alert(d)

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
// var now = new Date(); 
// var theDay = now.getDay(); 
// var nameOfToday = dayNames[theDay];
// alert(nameOfToday)


// var a=new Date();
// var b=a.getTime();
// alert(b)

// var a=new Date();
// var b=a.getMonth()
// alert(b)

// var a=new Date();
// var b=a.getMinutes();
// alert(b)

// var a=new Date();
// var b=a.getFullYear();
// alert(b)

// var a=new Date("Dec 10,1998");
// alert(a)

//Age Calculator
// var enter=prompt("Enter your DOB")
// var dob=new Date(enter);
// var dobmili=dob.getTime();
// var today=new Date();
// var todaymili=today.getTime();
// var diff =todaymili-dobmili;
// var diffyear=diff/(1000*60*60*30*24*12);
// alert(diffyear);
// var flooryear=Math.floor(diffyear);
// alert("Your are"+" "+flooryear+" "+"Years old")

// var d = new Date(); 
// var s= d.setFullYear(2001);
// alert(s)


// function hi(){
//     alert("Hello World");
// }
// hi();

// var now = new Date(); 
// var theHr = now.getHours(); 
// var theMin = now.getMinutes(); 
// alert("time: " + theHr + ":" + theMin);

// function hi(hello){
//     alert(hello);
// }
// hi("Hello World");


// function hi(a,b,c){
//     alert(a,b,c);
// }
// hi(8+9+10);
// hi(2-9+10);
// hi(8+9-11);



// var a=10;
// var b=44;
// d();
// function d(){
//     var c=a+b;
//     alert(c)
// }


// function fun(a,b=2){
//     return a+b;
// }
// alert(fun(1))

// function fun(a,b=3){
//     return a+b;
// }
// alert(fun(1,6))


// function fun(){
//     //return a+b;
// }
// alert(fun(1,6))


var c = prompt("Enter alphabat")
switch (c) {
    case "a":
        alert("It is vowels")
        break;
    case "e":
        alert("It is vowels")
        break;

    case "i":
        alert("It is vowels")
        break;

    case "o":
        alert("It is vowels")
        break;

    case "u":
        alert("It is vowels")
        break;

    default:
        alert("it is not a vowels")
        break;

}