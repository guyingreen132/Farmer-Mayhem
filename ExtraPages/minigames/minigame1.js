1let img;

function preload() {
  img = loadImage('../../assets/Player.png');
}


function setup () {
createCanvas(1000,400)
}

function draw() {
   image(img, 0, 0);
}
