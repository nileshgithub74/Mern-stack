// void = absence of any value;
// it is often used as the return type for function that do not return a value;



const PrintMessage = (message : string): void => {
    console.log(`heyy this is ${message} Kumar`);

}

PrintMessage("Nilesh");
PrintMessage("Shivam");



/// Never -------------- not return anything



const infinitLoop = ():never=>{
    while(true){};
    
}