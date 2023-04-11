class Character {
    constructor(img){
        this.img = img;
        this.s = 100;
        this.x = 50;
        this.y = 720;
        this.vy = 0;
        this.gravity = 2;
        this.score = 0;
    }

    draw() {
        noFill();
        noStroke();
        rect(this.x, this.y, this.s, this.s);
        image(this.img, this.x, this.y, this.s, this.s);

    }

    jump(){
        if(this.y === height - this.s){
            this.vy = -35;
        }
    }

    update(){
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.s);

    }

    rectCollision(enemy){
        if((this.s > dist(this.x, this.y, enemy.x, enemy.y) && enemy.x > (this.x/2)))
            return true;
    }

}