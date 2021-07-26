class ThrowableObjects extends MovableObject{
   
    constructor (x, y){
     
     
     super().LoadImage('img/6.botella/1.Marcador.png');
     this.x = x;
     this.y = y;
     this.h = 70;
     this.w = 50;

     this.ThrowBottle();
    
    }


    

    ThrowBottle(){
        this.GroundLevel= 500;
       
        this.speedY = 15; 
       this.setGravity();
       setInterval(() => {
           this.x += 10;
       }, 25);
    }
}