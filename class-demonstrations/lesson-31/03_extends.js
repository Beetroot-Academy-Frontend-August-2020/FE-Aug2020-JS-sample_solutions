class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  printPosition() {
    console.log(`Current point position X: ${this.x}, Y: ${this.y}`);
  }
}

class Point3D extends Point {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }
  
  printPosition() {
    console.log(`Current point position X: ${this.x}, Y: ${this.y}, Z: ${this.z}`);
  }
}

const point = new Point3D(10, 5, -1);
point.printPosition();