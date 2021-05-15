const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1=new Ground(600,400,1200,100);

    stand=new Ground(800,300,600,100);

    block1=new Box(800,250,80,80);
    block2=new Box(725,250,80,80);
    block3=new Box(875,250,80,80);

    block4=new Box(775,200,50,50);
    block5=new Box(825,200,50,50);
    
    block6=new Box(800,150,50,50);
    
    push();

    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);

    pop();

    slingshot1=new Slingshot(polygon.body,{x:200,y:50});
}

function preload(){
polygon_img=loadImage("polygon.png");
}

function draw(){

Engine.update(engine);

ground1.display();

stand.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();

slingshot.display();

imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
        Matter.Body.applyForce(polygon.body,polygon.body.position,{x:30,y:30});
        
    //}
}


function mouseReleased(){
    Matter.Body.applyForce(polygon.body,polygon.body.position,{x:30,y:30});
    slingshot.fly();
    polygon.pop();
    

}
function keyPressed(){
if(keyCode===32){
Matter.Body.setPosition(polygon.body,40,40);
slingshot1.attach(polygon.body);
}
}