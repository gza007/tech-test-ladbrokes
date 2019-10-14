class Drone {
  constructor() {
    this.xAxis = 0;
    this.yAxis = 0;
    this.compassDirection = "N";
    this.coordinateHistory = [];
  
    this.droneDirection = input => {
      let directions = input.split("");
      if (this.compassDirection === "N" && directions[0] === "R") {
        return (this.compassDirection = "E");
      }
      if (this.compassDirection === "E" && directions[0] === "R") {
        return (this.compassDirection = "S");
      }
      if (this.compassDirection === "S" && directions[0] === "R") {
        return (this.compassDirection = "W");
      }
      if (this.compassDirection === "W" && directions[0] === "R") {
        return (this.compassDirection = "N");
      }
      if (this.compassDirection === "N" && directions[0] === "L") {
        return (this.compassDirection = "W");
      }
      if (this.compassDirection === "W" && directions[0] === "L") {
        return (this.compassDirection = "S");
      }
      if (this.compassDirection === "S" && directions[0] === "L") {
        return (this.compassDirection = "E");
      }
      if (this.compassDirection === "E" && directions[0] === "L") {
        return (this.compassDirection = "N");
      }
    };
  
    this.droneInput = input => {
      this.droneDirection(input);
      let directions = input.split("");
      if (this.compassDirection === "N") {
        if (
          directions[0] === "R" || directions[0] === "L"
        ) {
          directions.map(char => {
            if (char === "+") {
              return this.yAxis++;
            }
            if (char === "-") {
              return this.yAxis--;
            }
          });
        }
      }
      if (this.compassDirection === "E") {
        if (
          directions[0] === "R" || directions[0] === "L"
        ) {
          directions.map(char => {
            if (char === "+") {
              return this.xAxis++;
            }
            if (char === "-") {
              return this.xAxis--;
            }
          });
        }
      }
      if (this.compassDirection === "S") {
        if (
          directions[0] === "R" ||
          directions[0] === "L"
        ) {
          directions.map(char => {
            if (char === "+") {
              return this.yAxis--;
            }
            if (char === "-") {
              return this.yAxis++;
            }
          });
        }
      }
      if (this.compassDirection === "W") {
        if (
          directions[0] === "R" ||
          directions[0] === "L"
        ) {
          directions.map(char => {
            if (char === "+") {
              return this.xAxis--;
            }
            if (char === "-") {
              return this.xAxis++;
            }
          });
        }
      }
    };
  
    this.showDirection = () => {
      switch (this.compassDirection) {
        case "N":
          console.log("The drone is currently facing North");
          break;
        case "E":
          console.log("The drone is currently facing East");
          break;
        case "S":
          console.log("The drone is currently facing South");
          break;
        case "W":
          console.log("The drone is currently facing West");
          break;
        default:
          console.log("Something has gone wrong!");
      }
    };
  
    this.showLocation = () =>
      console.log(
        `My end location is: (${String(this.xAxis)},${String(this.yAxis)}). Where shall I go now?`
      );
  }
};
  
  module.exports = Drone;