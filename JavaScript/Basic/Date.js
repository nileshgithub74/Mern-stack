/* const date = new Date();
console.log(date);
 */

// year, Month , day , hours, minutes, seconds, miliseconds,

/* 

const currrentDate = new Date(2025, 3,24,12,30,0,0);
console.log(currrentDate); 

 */


/* 
const date = new Date();
const year = date.getFullYear();
const month= date.getMonth();

console.log(`year is ${year}`);
console.log(`Month  is ${month}`);
console.log(date.toLocaleString()); */






/* 
setInterval in Javascript ----------- */

/* setInterval(()=>{
    console.log(`this iss fuction will executed after 2 seconds`),2000
}); */
  

// SetTimeout =------------------------------------------------




setTimeout(()=>{
    console.log(`this is Nilesh Kumar `);
},3000);



// Arrow function -------------------------

const  greet = ()=>{
    console.log(`function is called`);

}
setTimeout(greet,5000); 


//  clearInterval------------

const  Greet = ()=>{
    console.log(`Hello , Good Morning sir`);
}

const intervalId =  setInterval(Greet, 3000);

setTimeout(()=>{
    clearInterval(intervalId);
    console.log(` Interval Cleared`);
}, 1000); 