const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box,slingshot;
var gameState = "on sling";

function setup(){
  var canvas = createCanvas(800,400);
  engine = Engine.create();
   world = engine.world;
   
  box1= new Box (130,90,250,20);
  
  ball = Bodies.circle(300,200,70);
  World.add(world,ball);
  
  var options1 = {
    bodyA : ball,
    bodyB : box1,
    stiffness: 0.04,
    length: 100
  }

sling = Constraint.create(options1);
World.add(world , sling);

}

function draw() {
  background(255); 
  Engine.update(engine);
  box1.display();
  fill("red");
  ellipse(ball.position.x,ball.position.y,70,70);
  line(ball.position.x,ball.position.y,box1.position.x,box1.position.y);
    
}
