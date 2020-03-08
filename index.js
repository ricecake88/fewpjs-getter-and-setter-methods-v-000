// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  get radius() {
    return this.radius;
  }
  
  set radius(radius) {
    this.radius = radius;
  }
  
  get diameter() {
    return this.radius*2;
  }
  
  set diameter(value) {
    this._diameter = value;
    this.radius = value / 2;
  }
  
  get circumference() {
    return this.radius*2 * Math.PI;
  }
  
  set circumference(value) {
    this.radius = value / Math.PI / 2;  
  }
  
  get area() {
    return Math.PI * this.radius * this.radius;
  }
  
  set area(value) {
    this.radius = value / Math.PI / this.radius;
  }
}