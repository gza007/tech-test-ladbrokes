const Drone = require("./src/drone");
const fs = require("fs");
const instructions = fs.readFileSync("./problem-basic-input.txt", "utf-8");

function basicDroneInput() {
  const drone = new Drone();
  const instructionsArray = instructions.split(" ");
  for (let i = 0; i < instructionsArray.length; i++) {
    drone.droneInput(instructionsArray[i]);
  }
  return drone.showLocation();
};

console.log("I have safely arrived!");
basicDroneInput();