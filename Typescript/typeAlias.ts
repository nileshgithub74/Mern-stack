type person ={
    name: string,
    age : number,
    location : string,

}

const PrintUserInfo = (user: person) =>{
    return `Name : ${user.name} , ${user.age}, ${user.location}`;

};

 const res = PrintUserInfo({ name:"nilesh", age:23, location:"india"});
 console.log(res); 



 // Optinam Properties -------------------


 type Person = {
    name : string,
    age : number,
    readonly  email ?: string,
 }

 const  userInfo : Person ={
    name : "Nilesh",
     age : 20,
     email : "kumar@gmail.com",
    

 }

 console.log(`${userInfo.name}`);
 console.log(`${userInfo.age}`);
 console.log(`${userInfo.email}`);