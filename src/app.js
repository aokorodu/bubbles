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

  }

  init() {
    this.buildParticles();
    this.initNav();
    this.draw();

    const buttons = document.querySelectorAll('.navButton');
    for(const button of buttons){
      button.addEventListener("click", ()=>{
        console.log('clicked: ', button.innerHTML)
      })
    }

  }

  initNav() {
    const floatButton = document.getElementById("float");
    floatButton.addEventListener("click", () => {
      console.log("float click")
      this.changeMode("float");
      this.gravity = this.zeroG;
    })

    const bounceButton = document.getElementById("orbit");
    bounceButton.addEventListener("click", () => {
      console.log("orbit click")
      this.changeMode("orbit");
      this.gravity = this.zeroG;
    })

    const flowButton = document.getElementById("flow");
    flowButton.addEventListener("click", () => {
      console.log("flow click")
      this.changeMode("flow");
      this.gravity = this.lowG;
    })

    const dropButton = document.getElementById("drop");
    dropButton.addEventListener("click", () => {
      console.log("drop click")
      this.changeMode("drop");
      this.gravity = this.oneG;
    })
  }

  changeMode(newMode) {
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