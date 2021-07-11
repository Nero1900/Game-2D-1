class Character extends MovableObject{

    IMAGES_WALKING = ['img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png']

Word;
speed = 20;
WALKING_FORWARD_SOUND = new Audio('audio/Run_Forward.mp3');
WALKING_BACKWARD_SOUND = new Audio('audio/Run_Backward.mp3');
//BACKGROUND_SOUND = new Audio('audio/BADTIME.mp3');
constructor(){
    super().LoadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png')
    this.LoadImages(this.IMAGES_WALKING);
    this.animate();
}

animate(){

setInterval(() => {
    this.WALKING_FORWARD_SOUND.pause();
    this.WALKING_BACKWARD_SOUND.pause();
    if (this.Word.keyboard.RIGHT && this.x < 5*670){
        this.x += this.speed;
        this.Otherdirection = false;
       
        this.WALKING_FORWARD_SOUND.play();
        
    }

    if (this.Word.keyboard.LEFT  && this.x > -2*650){
        this.x -= this.speed;
        this.Otherdirection = true;
        this.WALKING_FORWARD_SOUND.play();
        
    }

    if (this.x < 4*720) {
        this.Word.Camera_X = -this.x +100 
    }

    
}, 1000/60);



   

 setInterval(() => {

    if (this.Word.keyboard.RIGHT || this.Word.keyboard.LEFT) {
        
        
        this.animateImage(this.IMAGES_WALKING)
         
    }
    
        
    
   
 }, 25);
   




}

jump(){

}
}