import {Greeter} from "./greeter";

let greeter = new Greeter("Hello, world!");

document.getElementById("greeting").innerHTML = greeter.greet();
