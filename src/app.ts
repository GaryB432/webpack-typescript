import {Greeter} from "./greeter";

let greeter: Greeter = new Greeter("Hello, world!");

document.getElementById("greeting").innerHTML = greeter.greet();
