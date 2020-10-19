import "./styles.scss";
import {App} from './app';
import { ButtonComponent } from './button-component';

console.log('hello world')

// let count = 0;
// const seaLine = document.getElementById("seaLine");
// const ship = document.getElementById("vanguardShip");

// const stepOne = ()=>{
//   seaLine.style.width = "500px";
//   ship.classList.add("floatClass");
// }

// stepOne();

const app = new App(500, 500);
app.init();
app.stepOne();
