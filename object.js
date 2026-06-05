/*const student = {
    firstname : "swapnil",
    lastname : "patil",
    age : 22,
    dob : "3 jan 2004"
}
console.log(student);
console.log(student.firstname, student.dob);
*/
const student = {
    firstname : "swapnil",
    lastname : "patil",
    age : 22,
    dob : "3 jan 2004",
     displayName: function(){ 
         return this.firstName + " " + this.lastname;
    } 
    
}
const fullName = student.displayName();
console.log(fullName);