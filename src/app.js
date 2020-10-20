import { Ball } from './ball';
import { PVector } from './pvector';

export class App {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.count = 0;
    this.seaLine = document.getElementById("seaLine");
    this.ship = document.getElementById("vanguardShip");
    this.particleSVG = document.getElementById("particles");
    this.totalParticles = 100;
    this.particles = [];
    this.zeroG = new PVector(0, 0);
    this.oneG = new PVector(0, 1);
    this.twoG = new PVector(0, 2);
    this.lowG = new PVector(0, .5);
    this.gravity = this.zeroG;
    this.navButtons = document.getElementsByTagName('button-component');
    //this.compButton = document.querySelector('button-component');
  }

  init() {
    this.buildParticles();
    this.draw();
    for(const button of this.navButtons){
      button.addEventListener("click", (e)=>{
        this.changeMode(button.getValue());
        this.activateSelectedButton(button);
      })
    }
  }

  activateSelectedButton(target){
    for(const button of this.navButtons){
      if (button == target){
        console.log('clicked button is ', button.getValue())
        button.activate(true);
      } else {
        button.activate(false)
      }
    }
  }

  changeMode(newMode) {
    switch(newMode){
      case "float":
        this.updateParticlesMode("float");
        this.gravity = this.zeroG;
      break;

      case "orbit":
        this.updateParticlesMode("orbit");
        this.gravity = this.zeroG;
      break;

      case "drop":
        this.updateParticlesMode("drop");
        this.gravity = this.oneG;
      break;

      case "flow":
        this.updateParticlesMode("flow");
        this.gravity = this.lowG;
      break;

      case "spin":
        this.updateParticlesMode("spin");
        this.gravity = this.zeroG;
      break;
    }
  }

  updateParticlesMode(newMode){
    for (let i = 0; i < this.totalParticles; i++) {
      this.particles[i].changeMode(newMode);
    }
  }

  buildParticles() {
    for (let i = 0; i < this.totalParticles; i++) {
      const x = 250; //Math.random() * this.w;
      const y = 250; //Math.random() * this.h/2;
      const b = new Ball(x, y, 10);
      b.init(this.particleSVG, 500, 250);
      b.changeMode("float");
      this.particles.push(b);
    }
  }

  stepOne() {
    this.ship.classList.add("floatClass");
  }

  draw() {
    for (const particle of this.particles) {
      particle.move(this.gravity);
      particle.update();
    }
    window.requestAnimationFrame(() => { this.draw() }, 1);
  }
}