var jaxon,jaxon_running; 
var street,street_img; 
var edges; 

function preload(){ 
//imagens pré-carregadas 
jaxon_running = loadAnimation("Runner-1.png","Runner-2.png"); 
street_img = loadImage("path.png"); 
} 

function setup(){ 
createCanvas(400,400); 
jaxon = createSprite(200,100,70,70); 
jaxon.addAnimation("run",jaxon_running); 
jaxon.scale = 0.5; 
jaxon.depth = +1; 

edges = createEdgeSprites(); 
} 

function draw() { 
background(0); 

drawSprites();
}