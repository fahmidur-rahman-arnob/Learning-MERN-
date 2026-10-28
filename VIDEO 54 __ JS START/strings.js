//In here I will learn about strings and it's methods...
console.log("This is about STRINGS!");

// let a = "Harry";

//one way of printing char's:-
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);

//Another way of printing char's of a string:-
// for(let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }
// console.log(a.length);


//Template Literals:-
let name = "harry";
let friend = "Rohan";
// console.log("His name is " + name + " and his friends name is " + friend);
console.log(`His name is ${name} and his friends name is ${friend}`);//this is template literals;

//Constructor:- The new String() constructor creates a string object instead of a primitive string. it is generally not recommended because it can cause unexpected behavior in comparisons.
let s = new String('abcd');
console.log(s);

/*
Escape Characters

We can use escape characters in string to add single quotes, dual quotes, and backslash.

    \' - Inserts a single quote
    \" - Inserts a double quote 
    \\ - Inserts a backslash


*/

let b = "Fahmidur";
console.log(b.toUpperCase());//transform to upper-case
console.log(b.toLowerCase());//transform to lower-case;
console.log(b.length);//returns the length of the string;