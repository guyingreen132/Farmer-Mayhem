let img;
let back;
let x=0;
let y=0;

function preload() {
  img = loadImage('../../assets/Player.png');
  back = loadImage('../../assets/Grass.png');
  plants = loadImage('../../assets/plant.png');
}


function setup () {
createCanvas(1000,400);
}

function draw() {
background(back);
  image(img, mouseX-50, mouseY-50,100,100);
    image(img, x,y,100,100);
  if (mouseX>x&&,mouseY<x+100) {let x = random(width);}
}
