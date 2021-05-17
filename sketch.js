const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;

function preload(){
     bg= loadImage("GamingBackground.png");
}
function setUp(){
    var canvas = createCanvas(1800,1500);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(600, 600, 1200, 20);
}
function draw(){
    background(bg);
    Engine.update(engine);
    ground.display();
}