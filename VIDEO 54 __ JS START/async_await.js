console.log("Inside Async_Await.js File...");


// function getData() {
//     //code goes here...
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     });
// };

// console.log("Loading Modules...");

// console.log("Do Something Else...");

// console.log("Load Data...");

// let data = getData();

// // data.then((v) => {
// //     console.log('data is -', data);

// //     console.log("Process Data...");

// //     console.log("Task 2");
// // });


//async function bananor ekta faida hocche ... ei function background e cholte thakbo amr kono motlob nai ei function niye ... 
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 3500);
    });
};

//amr code run hote thakbe ... 
console.log("Loading Modules ... ");

console.log("Do Something Else ... ");

console.log("Load Data ... ");

let data = getData();

console.log('data is - ', data);

console.log("Process Data ... ");

console.log('Task 2 ');
