var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    );
  }
}
function draw() {
  background(255, 255, 0);
  Engine.update(engine);
  ground.display();
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
}
