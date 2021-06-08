const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 
 const Constraint = Matter.Constraint;




var world;
var engine;


function setup() {
  createCanvas(800,800);
  stroke(255)
  engine = Engine.create(); 
  world = engine.world; 
  Engine.run(engine);
  ground = new Ground(600,height,1200,20);
  board = new Ground(500,400,400,10);
  box1 = new Box(650,200,100,70);
  box2 = new Box(550,200,100,70);
  box3 = new Box(450,200,100,70);
  box4 = new Box(350,200,100,70);
  box5 = new Box(600,150,100,70);
  box6 = new Box(500,150,100,70);
  box7 = new Box(400,150,100,70);
  box8 = new Box(550,100,100,70);
  box9 = new Box(450,100,100,70);
  box10 = new Box(490,20,100,70);
  polygon = new Polygon(100,300);
  sling = new Sling(polygon.body , {x:100,y:50})
 
}

function draw() {
  //camera.zoom=camera.zoom+1
  background("pink");  
  
 
  

 board.display();
 ground.display();
 box1.display();
 box2.display();
 box3.display();
 box8.display();
 box9.display();
 box10.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 polygon.display();
 drawSprites();
}
function mouseDragged(){
  
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
