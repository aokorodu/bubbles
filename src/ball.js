import {PVector} from "./pvector";

export class Ball {
  constructor(x, y, r) {
    this.origin = new PVector(x, y);
    this.location = new PVector(x, y);
    this.velocity = new PVector(Math.random() * 4 - 2, Math.random() * 4 - 2);
    this.accel = new PVector(0, 0);
    this.lifeSpan = 255;
    this.maxX;
    this.maxY
    this.cx = this.location.x;
    this.cy = this.location.y;
    this.r = 2 + Math.ceil(Math.random()*6);
    this.circle;
    this.fill = "#ffffff";
    this.stroke = "#ffffff";
    this.strokeWidth = 2;
    this.ns = "http://www.w3.org/2000/svg";

  }

  init(svg, maxX, maxY){
    this.setBounds(maxX, maxY)
    this.buildCircle(svg);
  }

  setBounds(maxX, maxY) {
    this.maxX = maxX
    this.maxY = maxY;
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

  randomColor(){
    return Math.round(Math.random()*255)
  }

  move(newForce) {
    this.accel.add(newForce);
    this.velocity.add(this.accel);
    this.location.add(this.velocity);
    this.accel = new PVector(0, 0);
  }

  draw() {
    console.log('this.location.x: ', this.location.x)
    this.circle.setAttribute("cx", this.location.x);
    this.circle.setAttribute("cy", this.location.y);
  }

  bounce() {
    if (this.location.x < 0) {
      this.location.x = 0;
      this.velocity.x *= -1;
    } else if (this.location.x > this.maxX) {
      this.location.x = this.maxX;
      this.velocity.x *= -1;
    }

    if (this.location.y > this.maxY) {
      this.location.y = this.maxY;
      this.velocity.y *= -1;
    } else if (this.location.y < 0) {
      this.location.y = 0;
      this.velocity.y *= -1;
    }

    //this.velocity.multiply(this.friction);
  }

  update(){
    this.bounce();
    this.draw();
  }
}