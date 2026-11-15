let a = prompt("Enter First Number");
let b = prompt("Enter Second Number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry This is not Allowed.");
}


let sum = parseInt(a) + parseInt(b);

console.log("The Sum is - ", sum);