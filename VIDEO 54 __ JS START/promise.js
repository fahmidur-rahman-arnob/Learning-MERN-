console.log('Promises are Here.. ');




let prom_one = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5) {
        console.log("a is", a);
        reject("No Random was not supporting you.")
    }
    else {
        setTimeout(() => {
            console.log("Yes, I am done...");
            resolve("Arnob");
        }, 3000);
    }
});

let prom_two = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5) {
        console.log("a is", a);
        reject("No Random was not supporting you 2.")
    }
    else {
        setTimeout(() => {
            console.log("Yes, I am done 2...");
            resolve("Arnob 2");
        }, 2000);
    }
});

// prom_one.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })
let p_three = Promise.all([prom_one, prom_two]);
p_three.then((a) => {
    console.log(a);
}).catch(err => {
    console.log(err);
})