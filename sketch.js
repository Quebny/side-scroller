let bgImg;
let charImg;
let char;
let enemyImg;
const enemies = [];
let bg1;
let bg2;
let alive = true;

function preload(){
    bgImg = loadImage('assets/bg.jpg');
    charImg = loadImage('assets/fish.png');
    enemyImg = loadImage('assets/enemy.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg1 = new Bg(bgImg, 0);
    bg2 = new Bg(bgImg, width);
    score = '0';
    spawnTime = 0;
    justSpawned = false;
    char = new Character(charImg);
}

function draw(){
    if(alive){
        if(!justSpawned){
            if(random()>= 0.98){
                enemies.push(new Enemy(enemyImg));
                justSpawned = true;
            }
        }
    }

    if(justSpawned){
        spawnTime += 1;
        if(spawnTime > 40){
            justSpawned = false;
            spawnTime = 0;
        }
    }
    
    bg1.draw();
    bg2.draw();
    char.draw();


    for(let enemy of enemies){
        enemy.draw();
        if(char.rectCollision(enemy)){
            bg1.speed = 0;
            bg2.speed = 0;
            enemy.SPEED = 0;
            alive = false;
        } else {
            enemy.move();
        }

        if(enemy.x < -30){
            char.score+= 10;
            enemies.splice(0,1);
            print("SCORE: " + char.score);
        }
    }

    bg1.scroll();
    bg2.scroll();

    char.update();

}

function keyPressed(){
    if (keyCode === 87 && alive){
        char.jump();
    }
}