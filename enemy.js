class Enemy{
    constructor(img){
        this.img = img;
        this.x = width;
        this.s = 50;
        this.y = height - this.s;
        this.SPEED = 5;
    }

    draw(){
        noFill();
        noStroke();
        rect(this.x, this.y, this.s, this.s);
        image(this.img, this.x, this.y, this.s, this.s);

    }

    move(){
        this.x -= this.SPEED;

    }
}