class Word {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ]

    clouds = [new Cloud]
    render = new Render();
    
    ctx;
    canvas;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas
        this.draw()
    }

    draw(){

       
this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.w, this.character.h)
this.enemies.forEach(enemy => {
    this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.w, enemy.h)
});
this.clouds.forEach(cloud => {
    this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.w, cloud.h)
});
this.ctx.drawImage(this.render.img, this.render.x, this.render.y, this.render.w, this.render.h);

// this.ctx.drawImage(this.enemies[0].img, 300, this.character.y, this.character.w, this.character.h) // another way without For Each



let self = this; // To Generate a Draw LOOP

requestAnimationFrame(function(){
    self.draw();
})

    }

}