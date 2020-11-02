class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  printPosition() {
    console.log(`Current point position X: ${this.x}, Y: ${this.y}`);
  }
}

const parent = new Point(10,5);
parent.printPosition();

// Point3D = subclass
// Point = base or main or super or root class
// extends = inheritance
class Point3D extends Point {
  constructor(x, y, z) {
    super(x, y); // calls the constructor in your super class - Point.constructor()
    this.z = z;
  }
  
  printPosition() {
    console.log(`Current point position X: ${this.x}, Y: ${this.y}, Z: ${this.z}`);
  }
}

const point = new Point3D(10, 5, -1);
point.printPosition();