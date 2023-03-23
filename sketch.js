let bgImg;
let charImg;
let bg1;
let bg2;

function preload(){
    bgImg = loadImage('assets/bg.jpg');
    charImg = loadImage('assets/fish.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg1 = new Bg(bgImg, 0);
    bg2 = new Bg(bgImg, width);
    char = new Character(charImg);
}

function draw(){
    bg1.draw();
    bg2.draw();

    bg1.scroll();
    bg2.scroll();

    char.draw();
    char.update();
}

function keyPressed(){

        if (keyCode === 87){
            if(char.y === height - (char.h * 3)){
                char.jump();
            }
        }
    

}