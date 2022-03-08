1.// how to declare a variable using let and const variable
const fatherName = 'Arnold';
let season = 'Rainy';
season = 'winter';

2.// Six basic condition >,<,==,===,!==,>=,<=
// Multiple Condition && ,||
if (fatherName === "Arnold" || season === "Rainy") {
    
}
else if(fatherName === "Arnold"){

}
else{

}

3.// Array  declare in js
// index,length,push,pop,shift,unshift,includes,indexOf
const numbers = [34,78,90,65];
numbers[0] = 77;

4.// Loop in array
for (let i = 0; i < number.length; i++) {
    const number = number[i];
    console.log(number);
    
}

5.// Function
function Addition(num1,num2) {
    sum = num1+num2;
    return sum;
}
const results = Addition(3,4);

// How to declare Object
const student = {
    name: 'Ringky',
    id:15203016,
    address:'Mohammod Pur'
}
const myNmae = 'Ringky'
// derect access by property
console.log(student.name); 
// acess by property name string  
console.log(student["id"]);
// access by property variable
console.log(student[myNmae]);

