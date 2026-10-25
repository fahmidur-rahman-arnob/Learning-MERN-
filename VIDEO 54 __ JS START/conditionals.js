console.log("Hello World") 

let age = 17;
let grace = 2;

console.log("->", age + grace);
console.log("->", age - grace);
console.log("->", age * grace);
console.log("->", age / grace);
console.log("->", age ** grace);
console.log("->", age % grace);

// if ((age + grace) > 18) {
//     console.log("You can drive.");
// }
// else {
//     console.log("You can't drive.");
// }

if (age != 18 && age < 18) {
    console.log("You Cant Drive.")
}
else if (age == 0) {
    console.log("You Must Be Joking Kid!")
}
else if (age > 10) {
    console.log("Learn Driving First.")
}
else {
    console.log("You Can Drive...")
}