import {
  genericFunction,
  genericFunctionArrow,
  printObject,
} from "../generics/generics";
import { Hero } from "../Interfaces";

// console.log(genericFunction(123.32434324).toFixed(2));
// console.log(genericFunction(new Date()).getDate());
// console.log(genericFunctionArrow("absd").toUpperCase());

const deadpool = {
  name: "Deadpool",
  realName: "Wade...",
  dangerLevel: 120,
};

console.log(genericFunctionArrow<Hero>(deadpool).name);
