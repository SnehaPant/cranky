
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1
var box1=[]
var box2=[]
var box3=[]
 var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
for(var i=0;i<7;i++){
box1.push(new Box(400,50))
}
for(var i=0;i<5;i++){
	box2.push(new Box(500,50))
	}
	for(var i=0;i<3;i++){
		box3.push(new Box(600,50))
		}
       ground1=new Ground()
       ball=new Ball(200,300,30,30)
      rope=new Rope(ball.body,{x:150,y:300})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  for(var i=0;i<box1.length;i++){
box1[i].display()
  }
  for(var i=0;i<box2.length;i++){
	box2[i].display()
	  }
	  for(var i=0;i<box3.length;i++){
		box3[i].display()
		  }
  ground1.display()
  ball.display()
 rope.display()
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
	rope.fly()
  }
  function keyPressed(){
    if(keyCode==32){
      rope.attached(ball.body)
	}
}

