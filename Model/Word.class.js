class Word {

    character = new Character();
    level = level1;
    ctx;
    canvas;
    Camera_X=0;
    
    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d'); // JS Method 
        this.canvas = canvas // ???? wir greifen nicht auf das canvas von constructor(canvas) sonder das canvas von canves; zu // Also wir sagen dass das Canvas in den Constructor = das Canvas oben canvas;
        this.keyboard = keyboard;
        this.draw() // function
        this.setworld();
        this.checkCollision();
       
    }

    setworld(){
        this.character.Word = this;
    }


    draw(){  
this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // this.ctx == context for theese methods /// damit das Bild nicht mehrmals geladen wird

this.ctx.translate(this.Camera_X, 0);

this.AddObjectsToMap(this.level.renders); // with an ForEach Loop
this.AddToMap(this.character); // Without a loop becouse we have only one Character
this.AddObjectsToMap(this.level.enemies); // with an ForEach Loop
this.AddObjectsToMap(this.level.clouds); // with an ForEach Loop

this.ctx.translate(-this.Camera_X, 0);
    
// this.ctx.drawImage(this.enemies[0].img, 300, this.character.y, this.character.w, this.character.h) // another way without For Each

let self = this; // To Generate a Draw LOOP

requestAnimationFrame(function(){
    self.draw();  // thid does not workinside the request animation frame so we first define this = self
})

    }

    AddObjectsToMap(Objects){
          Objects.forEach(Object => {
            this.AddToMap(Object)  
          });
    }

    AddToMap(mo) {

        if (mo.Otherdirection) {
            
            this.FlipImage(mo);
              
            }
            
            mo.draw(this.ctx);
            mo.ShowFrame(this.ctx);
           
            if (mo.Otherdirection) {
                this.FlipImageBack(mo);
                
              }
        }

        FlipImageBack(mo){
            this.ctx.restore(); 
            mo.x=mo.x*-1}

            FlipImage(mo){
                this.ctx.save();
                this.ctx.translate(mo.w, 0);
                this.ctx.scale(-1, 1);
               mo.x=mo.x*-1
            }

            checkCollision(){
                setInterval(() => {
                  
                  this.level.enemies.forEach(enemy => {
                   if(this.character.IsColliding(enemy)){ 
                       this.character.Hit();
                }
                  });  
                }, 200);}
            
              
                    
                    
    }




