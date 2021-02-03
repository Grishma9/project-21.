var canvas,box1,box2,box3,box4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,800);
 box1=createSprite(900,100,50,40);
 box1.shapeColour="blue";
 box2=createSprite(900,200,50,40);
 box2.shapeColour="orange";
 box3=createSprite(900,300,50,40);
 box3.shapeColour="green";
 box4=createSprite(900,400,50,40);
 box4.shapeColour="pink";
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background("grey");
    //create edgeSprite


drawSprites();
    //add condition to check if box touching surface and make it box
}
