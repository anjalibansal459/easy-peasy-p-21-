var canvas;
var music;

var a,b,c,d;
var e;
var outerboundary1;
var outerboundary2
var outerboundary3
var outerboundary4
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
a=createSprite(80,580,180,10);
a.shapeColor="black"
b=createSprite(280,580,180,10);
b.shapeColor="blue"
c=createSprite(480,580,180,10);
c.shapeColor="green"
d=createSprite(680,580,180,10);
d.shapeColor="purple"
e=createSprite(random(20,750),40,20,20);
e.shapeColor="white";
e.velocityY=3;
e.velocityX=5;

 outerboundary1=createSprite(00,0,2000,10);
outerboundary1.shapeColor="red";
outerboundary2=createSprite(00,800,10,2000);
outerboundary2.shapeColor="red";
// outerboundary3=createSprite(800,600,2000,10);
//outerboundary3.shapeColor="red";
 outerboundary4=createSprite(790,600,10,2000);
outerboundary4.shapeColor="red";
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background("yellow");
    if(frameCount%60===0){
        music.play();
    }
    //create edgeSprite
    createEdgeSprites();
e.bounceOff(outerboundary1)
e.bounceOff(outerboundary2)
////e.bounceOff(outerboundary3)
e.bounceOff(outerboundary4)
if(e.isTouching(a)&&e.bounceOff(a)){
    e.shapeColor="black";
}
if(e.isTouching(b)){
e.velocityX=0;
e.velocityY=0;
e.shapeColor="orange";
text("you loose",300,300);
music.stop();

}


   
    

if(e.isTouching(c)&&e.bounceOff(c)){
    e.shapeColor="green";
}
if(e.isTouching(d)&&e.bounceOff(d)){
    e.shapeColor="purple"
}
drawSprites();

    //add condition to check if box touching surface and make it box
}
