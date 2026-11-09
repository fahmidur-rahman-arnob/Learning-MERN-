//console.log("Inside Async_Await.js File...");


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
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(45500);
    //     }, 3500);
    // });

    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await x.text();
    console.log(data);
};

async function main() {
    //amr code run hote thakbe ... 
    console.log("Loading Modules ... ");

    console.log("Do Something Else ... ");

    console.log("Load Data ... ");

    let data = await getData();

    console.log('data is - ', data);

    console.log("Process Data ... ");

    console.log('Task 2 ');
}

main();


//amr code run hote thakbe ... 
// console.log("Loading Modules ... ");

// console.log("Do Something Else ... ");

// console.log("Load Data ... ");

// let data = getData();

// console.log('data is - ', data);

// console.log("Process Data ... ");

// console.log('Task 2 ');
