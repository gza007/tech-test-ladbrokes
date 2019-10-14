const fs = require("fs");
const instructions = fs.readFileSync("./problem-basic-input.txt", "utf-8");

class Drone {
  constructor() {
    this.xAxis = 0;
    this.yAxis = 0;
    this.compassDirections = ["North", "East", "South","West"];
    this.toggleCompassDirection = 0;
  
    this.droneDirection = input => {
      let directions = input.split("");
      if (directions[0] === "R") {
        this.toggleCompassDirection = this.toggleCompassDirection + 1;
        this.toggleCompassDirection = this.toggleCompassDirection % this.compassDirections.length;
      }
      if (directions[0] === "L") {
        if (this.toggleCompassDirection === 0) {
          this.toggleCompassDirection = this.compassDirections.length;
        }
        this.toggleCompassDirection = this.toggleCompassDirection - 1;
      }
      return this.compassDirections[this.toggleCompassDirection];
    };
  
    this.droneInput = input => {
      this.droneDirection(input);
      let directions = input.split("");
      // console.log(directions);
      if (this.toggleCompassDirection === 0) {
          directions.map(x => {
            if (x === "+") {
              return this.yAxis++;
            }
            if (x === "-") {
              return this.yAxis--;
            }
          });
      }
      if (this.toggleCompassDirection === 1) {
          directions.map(x => {
            if (x === "+") {
              return this.xAxis++;
            }
            if (x === "-") {
              return this.xAxis--;
            }
          });
      }
      if (this.toggleCompassDirection === 2) {
          directions.map(x => {
            if (x === "+") {
              return this.yAxis--;
            }
            if (x === "-") {
              return this.yAxis++;
            }
          });
      }
      if (this.toggleCompassDirection === 3) {
          directions.map(x => {
            if (x === "+") {
              return this.xAxis--;
            }
            if (x === "-") {
              return this.xAxis++;
            }
          });
        }
    };
  
    this.endLocation = () =>
      console.log(
        `My end location is: (${this.xAxis},${this.yAxis}).`
      );
  }
};

moveDrone = () => {
  const drone = new Drone();
  const instructionsArray = instructions.split(" ");
  // console.log(instructionsArray) 
  instructionsArray.map(x => drone.droneInput(x));
  return drone.endLocation();
};

console.log("I have safely arrived!");
moveDrone();
  
module.exports = Drone;