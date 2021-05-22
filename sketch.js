const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ghost1, bear1,slingShot;
var backgroundImg;
var gameState = "onSling";
function preload() {

  backgroundImg = loadImage("sprites/bg7.jpg");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    // to create objects
    ground = new Ground(600,height,1200,20)
    stage = new Stage()
    ghost1 = new Ghost(680,320,70,70);
    ghost2 = new Ghost(900,320,70,70);
    bear1 = new bear(790, 350);
    // angles are measured using PI 
    log1 = new Log(790,260,300, PI/2);

    ghost3 = new Ghost(680,240,70,70);
    ghost4 = new Ghost(900,240,70,70);
    bear3 = new bear(790, 220);

    log3 =  new Log(790,180,300, PI/2);

    ghost5 = new Ghost(790,160,70,70);
    log4 = new Log(740,120,150, PI/7);
    log5 = new Log(850,120,150, -PI/7);

    pumpkin = new Pumpkin(100,100);
    log6 = new Log(230,180,80, PI/2);
    slingShot = new SlingShot(pumpkin.body,{x:200, y:130});

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

  //to display objects

    ghost1.display();
    ghost2.display();
    ground.display();
    bear1.display();
    log1.display();

    ghost3.display();
    ghost4.display();
    bear3.display();
    log3.display();

    ghost5.display();
    log4.display();
    log5.display();
    
    pumpkin.display();
    slingShot.display();    
    stage.display();


}

function mouseDragged(){
  if(gameState !== "launched"){
  Matter.Body.setPosition(pumpkin.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}