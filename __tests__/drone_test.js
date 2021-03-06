const Drone = require("../src/drone");

describe("The Drone Constructor", () => {
  it("Can be instanced as an Object", () => {
    expect(new Drone()).toBeInstanceOf(Object);
  });
  it("Has a starting compass direction of North", () => {
    const drone = new Drone();
    expect(drone.compassDirections[0]).toBe("North");
  });
  it("Can toggle compass Directions", () => {
    const drone = new Drone();
    expect(drone.compassDirections[3]).toBe("West");
  });
  it("Has a starting X-axis co-ordinate of 0", () => {
    const drone = new Drone();
    expect(drone.xAxis).toEqual(0);
  });
  it("Has a starting Y-axis co-ordinate of 0", () => {
    const drone = new Drone();
    expect(drone.yAxis).toEqual(0);
  });
})

  describe("Turns", () => {
  it("can make right turns", () => {
    const drone = new Drone();
    drone.droneInput("R");
    expect(drone.compassDirections[drone.toggleCompassDirection]).toBe("East");
    drone.droneInput("R");
    expect(drone.compassDirections[drone.toggleCompassDirection]).toBe("South");
  });
  it("can make left turns", () => {
    const drone = new Drone();
    drone.droneInput("L");
    expect(drone.compassDirections[drone.toggleCompassDirection]).toBe("West");
    drone.droneInput("L");
    expect(drone.compassDirections[drone.toggleCompassDirection]).toBe("South");
  });
});

describe("Steps", () => {
  it("can move forwards", () => {
    const drone = new Drone();
    drone.droneInput("R+");
    expect(drone.xAxis).toBe(1);
  });
  it("can move backwards", () => {
    const drone = new Drone();
    drone.droneInput("L+");
    expect(drone.xAxis).toBe(-1);
  });
});

describe("Follow Basic Input Directions", () => {
  it("Follow basic-input directions - Example 1", () => {
    const drone = new Drone();
    drone.droneInput("R++");
    drone.droneInput("L+++");
    expect(drone.xAxis).toBe(2);
    expect(drone.yAxis).toBe(3);
  });
  it("Follow basic-input directions - Example 2", () => {
    const drone = new Drone();
    drone.droneInput("L++");
    drone.droneInput("R--");
    drone.droneInput("L+");
    expect(drone.xAxis).toBe(-3);
    expect(drone.yAxis).toBe(-2);
  });
  it("Follow basic directions from scenario.pdf - Further example 1", () => {
    const drone = new Drone();
    drone.droneInput("R+");
    drone.droneInput("L--");
    drone.droneInput("R+");
    drone.droneInput("R--");
    drone.droneInput("L++");
    expect(drone.xAxis).toBe(4);
    expect(drone.yAxis).toBe(0);
  });
  it("Follow basic directions from scenario.pdf - Further example 2", () => {
    const drone = new Drone();
    drone.droneInput("L-++");
    drone.droneInput("L+");
    drone.droneInput("R+");
    drone.droneInput("R-");
    drone.droneInput("L-++");
    drone.droneInput("R--");
    drone.droneInput("R-+-");
    drone.droneInput("L+");
    expect(drone.xAxis).toBe(-4);
    expect(drone.yAxis).toBe(-3);
  });
});