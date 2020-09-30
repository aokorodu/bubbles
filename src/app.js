import {Ball} from './ball';
import {PVector} from './pvector';

export class App {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.count = 0;
    this.seaLine = document.getElementById("seaLine");
    this.ship = document.getElementById("vanguardShip");
    this.particleSVG = document.getElementById("particles");
    this.totalParticles = 50;
    this.particles = [];
    this.zeroG = new PVector(0,.1);
  }

  init() {
    this.buildParticles();
    this.draw();
  }

  buildParticles(){
    for(let i = 0; i < this.totalParticles; i++){
      const x = Math.random() * this.w;
      const y = Math.random() * this.h/2;
      const b = new Ball(x, y, 10);
      b.init(this.particleSVG, 500, 250);
      this.particles.push(b);
    }
  }

  stepOne() {
    this.ship.classList.add("floatClass");
  }

  draw(){
    for(const particle of this.particles){
      particle.move(this.zeroG);
      particle.update();
    }
    window.requestAnimationFrame(()=>{this.draw()}, 1);
  }
}