// Here we'll learn about loops in JS...

// for(let i = 0; i <= 951000; i++){
//     console.log("->", i);
// }

// console.log("I am inside loops.js");

//normal for loop:
// let a = 1;
// for (let i = 0; i < 100; i++){
//     console.log(a + i);
// }

//For-in Loop:
// let obj = {

//     name: "Harry",
//     role: "Programmer",
//     company: "DeshIT-BD"
// };
// for (const key in obj) {
//     // const element = obj[key]; //this is how you print key & values
//     // console.log("Key->",key,",", "element->",element);

//     console.log(key);//this is how you print only keys
// }


//For-of Loop: with strings (will see arrays somedays later)
// for(const c of "Fahmidur-Rahman-Arnob"){
//     console.log(c);
// }

//While loop 
// let i = 0;
// while(i < 6) {
//     console.log(i + 1); // only i prints 0-5 and adding 1 with it prints 1-6
//     i++;
// }


//Do-While Loop: This loops runs at least once;
// let i = 0;
// do{
//     console.log(i + 1);
//     i++;
// }while(i < 6);