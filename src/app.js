import "./polyfills";
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

//                   REACT PURO
import React from "react";
import ReactDOM from "react-dom";

var customElement = React.createElement("h1", null, "Hello Word");
var anotherCustomElement = <h1>
    It's working
</h1>;

ReactDOM.render(anotherCustomElement, document.getElementById("app"));
//ReactDOM.render(customElement, document.getElementById("app"));

const array = [5, 50, 500];
const ourNumber = array.find((number) => {
    return number > 10;
});
console.log(ourNumber)


//                   JAVAESCRIPT PURO
import "./styles/styles.scss";

// // --------CODIGO1
// // import { 
// //     add as hello, 
// //     subtract, 
// //     multiply, 
// //     divide 
// // } from "./script.js";
// // console.log(hello(2, 10));
// // console.log(divide(6, 94));

// // --------CODIGO2
// // import * as functions from "./script.js";
// //import printName from "./script.js";

// // --------CODIGO3
// // console.log(functions.add(2, 25));
// // printName("jennifer");

// // --------CODIGO4
// // const arrowFunction = (name) => name;
// // console.log(arrowFunction("Jennifer"));


// const user = {
//     id: 1,
//     name: "Jennifer"
// };
// const advancedUser = {
//     ...user,
//     age: 31
// };
// console.log(advancedUser);

