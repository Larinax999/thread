// multiprocessing
const exec = (...args) => {args.splice(1, 0, 0);setTimeout(...args);};

// sleep
const sleep = (ms) => return new Promise(resolve => setTimeout(resolve, ms));

// async function
async function main(data) {
  await sleep(1500); // sleep 1.5sec
  console.log(`Hello ${data}`);
  
}

let i=5;
while (i--){
  exec(main,"World"); 
}
