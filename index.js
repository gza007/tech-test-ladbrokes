const Drone = require("./src/drone");
const fs = require("fs");
const instructions = fs.readFileSync("./problem-basic-input.txt", "utf-8");

function basicDroneInput() {
  const drone1 = new Drone();
  const instructionsArray = instructions.split(" ");

  for (let i = 0; i < instructionsArray.length; i++) {
    drone1.droneInput(instructionsArray[i]);
  }
  return drone1.showLocation();
};

console.log("I have safely arrived!");
basicDroneInput();