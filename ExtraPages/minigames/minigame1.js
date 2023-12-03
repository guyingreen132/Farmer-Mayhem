let img;
function preload() {
  img = loadImage('../../assets/Player.png');
}


function setup () {
createCanvas(1000,400)
}

function draw() {
clear();
  image(img, mouseX, mouseY,100,100);
}
