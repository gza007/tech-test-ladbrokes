class Drone {
  constructor() {
    this.xAxis = 0;
    this.yAxis = 0;
    this.compassDirection = "North";
    this.coordinateHistory = [];
  
    this.droneDirection = input => {
      let directions = input.split("");
      if (this.compassDirection === "North" && directions[0] === "R") {
        return (this.compassDirection = "East");
      }
      if (this.compassDirection === "East" && directions[0] === "R") {
        return (this.compassDirection = "South");
      }
      if (this.compassDirection === "South" && directions[0] === "R") {
        return (this.compassDirection = "West");
      }
      if (this.compassDirection === "West" && directions[0] === "R") {
        return (this.compassDirection = "North");
      }
      if (this.compassDirection === "North" && directions[0] === "L") {
        return (this.compassDirection = "West");
      }
      if (this.compassDirection === "West" && directions[0] === "L") {
        return (this.compassDirection = "South");
      }
      if (this.compassDirection === "South" && directions[0] === "L") {
        return (this.compassDirection = "East");
      }
      if (this.compassDirection === "East" && directions[0] === "L") {
        return (this.compassDirection = "North");
      }
    };
  
    this.droneInput = input => {
      this.droneDirection(input);
      let directions = input.split("");
      if (this.compassDirection === "North") {
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
      if (this.compassDirection === "East") {
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
      if (this.compassDirection === "South") {
        if (
          directions[0] === "R" || directions[0] === "L"
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
      if (this.compassDirection === "West") {
        if (
          directions[0] === "R" || directions[0] === "L"
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
  
    this.showLocation = () =>
      console.log(
        `My end location is: (${String(this.xAxis)},${String(this.yAxis)}).`
      );
  }
};
  
  module.exports = Drone;