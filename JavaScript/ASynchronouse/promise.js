function checkNumber(num){
    return new Promise((resolve,reject) =>{
        if(num %2 ==0){
            resolve(`${num} is an even number`);
        }else{
            reject(`${num} is Odd Number`);
        }

    } );
        
}
const  numberToCheck = 7;

checkNumber(numberToCheck).then((message)=>{
    console.log(`Successful : ${message}`);

}).catch( (error)=>{
    console.log(`Erorr : ${error}`);
}).finally()