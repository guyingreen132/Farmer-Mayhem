let img;
let back;

function preload() {
  img = loadImage('../../assets/Player.png');
  back = loadImage('../../assets/Grass.png');
}


function setup () {
createCanvas(1000,400)
}

function draw() {
clear();
  image(back,0,0,1000,400);
  image(img, mouseX-50, mouseY-50,100,100);
}
