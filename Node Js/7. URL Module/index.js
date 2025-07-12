import { URL } from "url";

const myurl = new URL("https://www.example.com:8050/p/a/t/h?query?string#hash");

// console.log(myurl.hash);
// console.log(myurl.host);
// console.log(myurl.port);
// console.log(myurl.href);

console.log(myurl.protocol);

console.log(myurl.toString());
console.log(myurl.toJSON());


