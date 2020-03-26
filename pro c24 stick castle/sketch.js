const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var head1;


function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;
    bg1= createSprite(50,700,300,200);
    bg1.shapeColor="green";
    bg2 = createSprite(1450,700,300,200);
    bg2.shapeColor="green";
    box1 = new Box(1250,650,100,750);
    box2 = new Box(750,650,900,500);
    box3 = new Box(250,650,100,750);
    box4 = new Head(325,365,50,70);
    box5 = new Head(425,365,50,70);
    box6 = new Head(525,365,50,70);
    box7 = new Head(625,365,50,70);
    box8 = new Head(725,365,50,70);
    box9 = new Head(825,365,50,70);
    box10 = new Head(925,365,50,70);
    box10 = new Head(925,365,50,70);
    box11 = new Head(1025,365,50,70);
    box12 = new Head(1125,365,50,70);
    box13 = new Head(1200,365,50,70);
    box14 = new Box(775,365,100,250);
    
    head1 = new Box(200,200,3,50);
    pole1=createSprite(250,120,10,100);
    pole1.shapeColor="black";
    pole2=createSprite(1250,120,10,100);
    pole2.shapeColor="black";
    pole3=createSprite(775,80,10,100);
    pole3.shapeColor="black";
    brick1 = new Brick(220,450,40,20);
    brick2 = new Brick(205,470,40,20);
    brick3 = new Brick(240,470,40,20);
    brick4 = new Brick(240,600,40,20);
    brick5 = new Brick(225,620,40,20);
    brick6 = new Brick(260,620,40,20);
    brick7 = new Brick(220,750,40,20);
    brick8 = new Brick(205,770,40,20);
    brick9 = new Brick(240,770,40,20);
    brick10 = new Brick(1220,450,40,20);
    brick12 = new Brick(1205,470,40,20);
    brick13 = new Brick(1240,470,40,20)
    brick17 = new Brick(1240,600,40,20);
    brick14 = new Brick(1225,620,40,20);
    brick15 = new Brick(1260,620,40,20);
    brick16 = new Brick(1220,750,40,20);
    brick18 = new Brick(1205,770,40,20);
    brick19 = new Brick(1240,770,40,20);
    brick20 = new Brick(380,500,40,20);
    brick21 = new Brick(365,520,40,20);
    brick22= new Brick(400,520,40,20);
    brick23 = new Brick(380,700,40,20);
    brick24 = new Brick(365,720,40,20);
    brick25= new Brick(400,720,40,20);
    brick26= new Brick(1080,500,40,20);
    brick27 = new Brick(1065,520,40,20);
    brick28= new Brick(1100,520,40,20);
    brick29 = new Brick(1080,700,40,20);
    brick30 = new Brick(1065,720,40,20);
    brick11 = new Brick(1100,720,40,20);
    //bg = new Brick(0,400,1500,400);
    

}

function draw(){
    background("blue");
    
    Engine.update(engine);
   
    
    
    box14.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display(); 
    box12.display();
    box13.display();
    
    //head1.display();
    fill(195,56,52);
    triangle(250, 160, 200, 280,300,280);
    triangle(1250,160,1200,280,1300,280)
    triangle(775,120,725,240,825,240);
    pole1.display();
    pole2.display();
    pole3.display();
    fill(240,91,93);
    triangle(245,70,50,180,245,160);
    triangle(1245,70,1050,180,1245,160);
    triangle(770,30,575,140,770,130);
     
    fill(88,54,35);
    rect(700,500,150,280);

    fill(164,220,234)
    rect(225,300,50,100);
    rect(1225,300,50,100);
    rect(755,250,40,60);

    
brick1.display();
brick2.display();
brick3.display();
brick4.display();
brick5.display();
brick6.display();
brick7.display();
brick8.display();
brick9.display();
brick10.display();
brick11.display();
brick12.display();
brick13.display();
brick14.display();
brick15.display();
brick16.display();
brick17.display();
brick18.display();
brick19.display();
brick20.display();
brick21.display();
brick22.display();
brick23.display();
brick24.display();   
brick25.display();
brick26.display();
brick27.display();
brick28.display();
brick29.display();
brick30.display();


drawSprites();
}