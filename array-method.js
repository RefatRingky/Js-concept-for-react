// Array Map
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);

// forEach method
const array2 = ['a', 'b', 'c'];

array2.forEach(element => console.log(element));

// Array find method
const findMethod = [5, 12, 8, 130, 44];

const found = findMethod.find(element => element > 10);

console.log(found);

// Array Filter Method
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
