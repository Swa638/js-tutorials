 /*function displayTable(y)
 {
    for(var i=0; i<=10; i++)
    {
        console.log(y,"x",i,'=',y*i);
    }
 }
 console.log("hi, hello, kem cho, ram ram, namaskar");
 displayTable(4);
 console.log("kyu nahi ho rahi hai padahi");
 displayTable(10);*/
 /* 
 function sum (x,y)
 {
    console.log("sum", x+y);

 }
 sum(20,5);
 sum(50,50);
 function substract (x,y)
 {
    console.log("substract", x-y);
 }
 substract(100,50);
 */
/* 
function sum(x,y)
{
   var z = x + y;
   return z; 
}
console.log("hello");
var res1 = sum(20,5);
console.log(res1*2);
var res2 = sum(30,20);
console.log(res2-5);
*/
// arrow function //
const demo = ( ) => {
    console.log("hello swapnil");
}
demo();
const demo = (x,y) => {
    return x+y;

}
let z = demo(30,50);
console.log(z);