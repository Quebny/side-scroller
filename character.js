class Character {
    constructor(img){
        this.img = img;
        this.w = 100;
        this.h = 100;
        this.x = 100;
        this.y = height - (this.h * 3);
        this.vy = 0;
        this.gravity = 2;
        // this.jumping = false;
        // this.falling = false;
        // this.acceleration = 0.5;
    }

    draw() {
        print(this.y);
        image(this.img, this.x, this.y, this.w, this.h);

        // if(this.jumping){
        //     this.acceleration+=.8;
        //     this.y-=this.acceleration;
        //     if(this.y < 500){
        //         this.acceleration = 0;
        //         this.jumping = false
        //         this.falling = true;
        //     }
        // }

        // if(this.falling){
        //     this.acceleration+=.5;
        //     this.y+=this.acceleration;
        //     if(this.y > 670){
        //         this.falling = false;
        //     }
        // }
    }

    jump(){
        this.vy = -30
    }

    update(){
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - (this.h * 3));
    }
}