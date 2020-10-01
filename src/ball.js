import { PVector } from "./pvector";

export class Ball {
  constructor(x, y, r) {
    this.origin = new PVector(x, y);
    this.location = new PVector(x, y);
    this.velocity = new PVector(Math.random() * 4 - 2, Math.random() * 2 - 1);
    this.accel = new PVector(0, 0);
    this.lifeSpan = 255;
    this.maxX;
    this.maxY
    this.cx = this.location.x;
    this.cy = this.location.y;
    this.r = 2 + Math.ceil(Math.random() * 6);
    this.circle;
    this.fill = "#ffffff";
    this.stroke = "#ffffff";
    this.strokeWidth = 2;
    this.ns = "http://www.w3.org/2000/svg";
    this.mode = "bounce";
    this.friction = .99;

  }

  init(svg, maxX, maxY) {
    this.setBounds(maxX, maxY)
    this.buildCircle(svg);
  }

  setBounds(maxX, maxY) {
    this.maxX = maxX - this.r
    this.maxY = maxY - this.r;
  }

  buildCircle(svg) {
    const randColor = `rgb(${this.randomColor()}, ${this.randomColor()}, ${this.randomColor()})`;
    this.circle = document.createElementNS(this.ns, "circle");
    this.circle.setAttribute("cx", this.cx);
    this.circle.setAttribute("cy", this.cy);
    this.circle.setAttribute("r", this.r);
    this.circle.setAttribute("fill", '#ffffff');
    this.circle.setAttribute("fill-opacity", .3);
    //this.circle.setAttribute("stroke", this.stroke);
    //this.circle.setAttribute("stroke-width", this.strokeWidth);
    svg.appendChild(this.circle);
  }

  randomColor() {
    return Math.round(Math.random() * 255)
  }

  move(newForce) {
    this.accel.add(newForce);
    this.velocity.add(this.accel);
    this.location.add(this.velocity);
    this.accel = new PVector(0, 0);
  }

  draw() {
    this.circle.setAttribute("cx", this.location.x);
    this.circle.setAttribute("cy", this.location.y);
  }

  changeMode(newMode) {
    if (newMode == this.mode) return;

    this.mode = newMode;
    if (this.mode == "float") {
      this.velocity = new PVector(Math.random() * 1 - .5, Math.random() * 2);
    } else if (this.mode == "bounce") {
      this.velocity = new PVector(this.velocity.x, Math.random() * 4 - 2);
    } else if (this.mode == "flow") {
      this.velocity = new PVector(this.velocity.x, Math.random() * 4 - 2);
    }
  }

  bounce() {
    if (this.location.x < this.r) {
      this.location.x = this.r;
      this.velocity.x *= -1;
    } else if (this.location.x > this.maxX) {
      this.location.x = this.maxX;
      this.velocity.x *= -1;
    }

    if (this.location.y > this.maxY) {
      this.location.y = this.maxY;
      this.velocity.y *= -1;
    } else if (this.location.y < this.r) {
      this.location.y = this.r;
      this.velocity.y *= -1;
    }

    if (this.mode != "drop") return;

    this.velocity.multiply(this.friction);
  }

  float() {
    if (this.velocity.y > 0) this.velocity.y *= -1;
    if (this.location.x < 0) {
      this.location.x = this.maxX;
    } else if (this.location.x > this.maxX) {
      this.location.x = 0;
    }

    if (this.location.y < 0) {
      this.location.y = this.maxY;
    } else if (this.location.y > 250) {
      this.location.y = this.maxY;
    }
  }

  flow() {
    if (this.location.y > 250) {
      this.location.y = 250;
      this.location.x = this.maxX/2;
      const yVel = Math.random() * 20 + 20;
      this.move(new PVector(Math.random() * 1 - .5, -yVel));
    }
  }



  update() {
    //this.float();
    if (this.mode == "float") {
      this.float()
    } else if (this.mode == "bounce"){
      this.bounce()
    } else if (this.mode == "drop"){
      this.bounce()
    } else {
      this.flow();
    }
    this.draw();
  }
}