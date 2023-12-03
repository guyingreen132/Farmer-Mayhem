let img;
let bk;
function preload() {
  img = loadImage('../../assets/Player.png');
  bk = loadImage('../../assets/Grass.png');
}


function setup () {
createCanvas(1000,400)
}

function draw() {
  image(bk, 0, 0,1000,400);
   image(img, mouseX, mouseY,100,100);
}
