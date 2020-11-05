
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;


function setup() {
	var canvas = createCanvas(1500,700);
	engine = Engine.create();
	world = engine.world;

    ground  = new Ground(width/2,650,width,10);
	paper = new Paper(100,600,20);

	boxPosition=width/2-100
	 boxY=590;
	 boxX=1000;

	 boxLeftSprite = createSprite(boxPosition,boxY,20,100);
	boxLeftSprite.shapeColor=color(255,0,0);
	
	boxLeftBody = Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true});
	World.add(world,boxLeftBody);

	boxBase = createSprite(boxPosition+100,boxY+40,200,20);
	boxBase.shapeColor = color(255,0,0);

	boxBottomBody = Bodies.rectangle(boxPosition+100,boxY+45-20,200,20,{isStatic:true});
	World.add(world,boxBottomBody);

	boxLeftSprite = createSprite(boxPosition+200,boxY,20,100);
	boxLeftSprite.shapeColor = color(255,0,0);

	boxRightBody = Bodies.rectangle(boxPosition+200-20,boxY,20,200,{isStatic:true});
	World.add(world,boxRightBody);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  paper.display();
  ground.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}