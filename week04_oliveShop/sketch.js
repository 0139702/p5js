let img_navBar;
let img_banner;
let img_product;
let img_homeBar;
let img_aiButton;
let img_gradient;
let img_textBox;

let state = 0;

function preload(){
  img_navBar = loadImage('01_NavBar.png');
  img_banner = loadImage('02_AdBanner.png');
  img_product = loadImage('03_Product.png');
  img_homeBar = loadImage('04_GNB.png');
  img_aiButton = loadImage('05_ai_icon.png');
  img_gradient = loadImage('06_green.png');
  img_textBox = loadImage('07_textbox.png');
}

//loadImage가 오래 걸리면 setup-draw 사이 blank상태 발생
function setup() { 
  createCanvas(393, 852);
}

function draw() {
  background(220);
  if(state == 0) {
    image(img_navBar, 0, 0, 393, 128);
    image(img_banner, 0, 128, 393, 284);
    image(img_product, 0, 412, 393, 440);
    image(img_homeBar, 0, 764, 393, 88);
    image(img_aiButton, 320, 688, 60, 60);
  } else if(state == 1) {
    image(img_navBar, 0, 0, 393, 128);
    image(img_banner, 0, 128, 393, 284);
    image(img_product, 0, 412, 393, 440);
    image(img_gradient, 0, 612, 393, 152); //button
    image(img_homeBar, 0, 764, 393, 88);
    image(img_aiButton, 320, 688, 60, 60);
  }
}

function mouseClicked(){
  if(mouseX >= 320 && mouseX <= 380) {
    if(mouseY >= 688 && mouseY <= 748) {
      if(state == 0)
        state = 1;
      else if(state == 1)
        state = 0;
    }
  }
}