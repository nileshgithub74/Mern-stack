//  Type Interface is a feature in ts that allow the complier to automatically determine the type of a variable based on its Value. In Other hands, if you declare  a variable without expilicitly specifiying its type. Typescript will try to infer the typed based on the value you assign to it.


let tech = "typescipt";

console.log(tech);
console.log( typeof (tech));



//// ANY tYPE---------------------------


let  color : any = "red";
color = 7;
color = false;
console.log(color);