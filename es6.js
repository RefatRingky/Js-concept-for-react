1.// Template string
const student = {
    name: 'Ringky',
    id:15203016,
    address:'Mohammod Pur'
}

const about =`My Nmae is ${student.name} id is ${student.id} address is ${student.address}`;
console.log(about);

// Arrow Function
const getFiftyFive = () =>55;
const addSixtyFive = num =>num+65;
const multiply = (x,y,z) => x*y*z;

// speard operator
let numberStore = [0, 1, 2];
let newNumber = (34);
numberStore = [...numberStore, newNumber];
console.log(numberStore);
