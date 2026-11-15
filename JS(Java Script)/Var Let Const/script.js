//var let const
/*var a;
var a  = 12;
let a;
let a = 12;
//const a; is not valid not a correct way 
const a = 12;
*/

/*
//initialization and declarations
var a; //declarations
var a  = 12; //initialization
*/

//drawback of var
/*
1. Window mein add hota hai
2. Functiom scoped hota hai
3. app firse declare kr skte ho same name se and error nahi aayega(we can declare two or more vale to same naemed var and it will not throw any error on screen)
*/

/*
var a = 1
var a = 12
var a = 123
//no error shown
*/

/*
//using let in place of var
let a = 1
let a = 12
*/

//Use of const
/*const dulha = "Yaar";
const dulhan = "Bhabhi";
used when we know the value of fixed nd we connot ch-ange it
*/

//Scope (global , block , function)

/*
var a = 12;//global

{
    var b = 12; //also a global because var only respect to funtion (not global)
}

function{
    var c = 12 ; //Function scope 
}
function{
  if(){
      var c = 12 ; //Function scope (it only respect fuction scope so it will ignore if)
  }
}
*/

/*
let a = 12; //global

{
    let b = 12; //block because it respect block items too
}

function{
    let c = 12 ; //Function scope 
}
function{
  if(){
      let c = 12 ; //now scope belong to block in this place which is if
  }
}
*/
//**Note ; 'var' is fuction scoped which only respect function where as 'let' is a block ("{}") scoped which respect all block scoped element

//reassignment , redeclaration

/*
var a = 12;
a = 32; //reassign

var a = 233; //redeclaration

let b = 12 ;
b=32; //reassign

let b = 223; //redeclaration is not possible with let 
*/

//Temporal Dead Zone

/* 
console.log(a);
//tdz - utna area jitne mai js ko pata hai ki variable exist karta hai par vo aapko value nahi de sakta...//
//
let a = 12; //The shadede are between console and let which is '//' is called temporal dead zone (tdz)
// same for const
*/

/*
//different for ver
consol.log(a);

//jat js ko value pata hoti hai aur vo koi error nahi show karta hai vo uuske bajaye undefined show karte hai 

var a = 12 ;
*/

//Hoisting impact per type 
/*var js ko value to deta hai par vo undefined hota hai kyuki var do hisso mein toot yar fir devide ho jata hai 1.ver a = undefined 2. a = 12 is mein 1. value uppar chale jate hai aur dusre vahi reh jati hai using " hoaisting "
*/
/*
(ver a = undefined;
  consol.log(a);


  a = 12 ;)
  to ver a ki value undefined aati na koi error

*/
/*
Q1
let a =10;

{
    let a = 20;
    console.log("Inside :", a);
    
}
console.log("Outside :", a);
*/

/*
Q2
var a = 10;

{
    var a = 20;
}
console.log("Value a :", a);
*/