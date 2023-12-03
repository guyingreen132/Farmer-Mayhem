let img;
let back;

function preload() {
  img = loadImage('../../assets/Player.png');
  back = loadImage('../../assets/Grass.png');
}


function setup () {
createCanvas(1000,400);
}

function draw() {
background(150, 224, 108);
  image(img, mouseX-50, mouseY-50,100,100);
}
