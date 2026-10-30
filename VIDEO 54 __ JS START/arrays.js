

//here we'll learn all about JS arrays...
/*
In JavaScript, an array is an ordered list of values. Each value, known as an element, is assigned a numeric position in the array called its index.

The indexing starts at 0, so the first element is at position 0, the second at position 1, and so on.
Arrays can hold any type of data-such as numbers, strings, objects, or even other arrays-making them a flexible and essential part of JavaScript programming.

1) arrays are mutable -> we can make changes to an array.
2) strings are immutable -> we can't make any changes to a string;

*/


let arr = [1, 2, 4, 5, 7]; // an array
//         0  1  2  3  4  these are index of arrays
console.log(arr);
console.log("Length of arr is: ",arr.length);
console.log("Element at index 0 is: ",arr[0]);
console.log("Element at index 1 is: ",arr[1]);
console.log("Element at index 2 is: ",arr[2]);
console.log("Element at index 3 is: ",arr[3]);
console.log("Element at index 4 is: ",arr[4]);
console.log("Element at index 5 is: ",arr[5]); //it'll give undefined because:  

console.log(arr.toString()); //method - 1: turns an array to a string
console.log(arr.join(" and ")); //method - 2: it joins arrays elements together with the element inside the quotes
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a.pop(); // it'll remove the last elment of the array...
// console.log(a); 

arr.pop(); // it'll remove the last elment of the array...
console.log(arr);
arr.push("Anika + Arnob"); // it'll add the element at last of the array ... 
console.log(arr);
console.log(arr.shift()); //it'll remove and return the first element of the array...
console.log(arr.unshift("Anika (.)(.)")); // it'll add the element at the beginning and it'll return the length of the new array;
console.log(arr);