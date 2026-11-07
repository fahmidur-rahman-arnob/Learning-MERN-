console.log("Inside Async_Await.js File...");


function getData() {
    //code goes here...
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 3500);
    });
};

console.log("Loading Modules...");

console.log("Do Something Else...");

console.log("Load Data...");
let data = getData();
console.log('data is -', data);



console.log("Process Data...");