class Character extends MovableObject{

    IMAGES_WALKING = ['img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png']

    IMAGES_JUMP = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png'
        ]
        IMAGES_DEAD= [
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png',
            
        ]

        IMAGE_HURT = [
           'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
           'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
           'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
        ]


Word;
speed = 10;
energy = 100;

//WALKING_FORWARD_SOUND = new Audio('audio/Run_Forward.mp3');
//WALKING_BACKWARD_SOUND = new Audio('audio/Run_Backward.mp3');
//BACKGROUND_SOUND = new Audio('audio/BADTIME.mp3');
constructor(){
    super().LoadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png')
    this.setGravity();
    this.LoadImages(this.IMAGES_WALKING);
    this.LoadImages_JUMP(this.IMAGES_JUMP);
    this.LoadImages(this.IMAGES_DEAD);
    this.LoadImages(this.IMAGE_HURT);
    this.animate();
    
}





animate(){

setInterval(() => {
    //this.WALKING_FORWARD_SOUND.pause();
    //sthis.WALKING_BACKWARD_SOUND.pause();
    
 
    

    if (this.Word.keyboard.RIGHT && this.x < 5*670){
        this.MoveRight_Character();
        
    }

    if (this.Word.keyboard.LEFT  && this.x > -2*650){
        this.MoveLeft_Character();
        
    }

    if (this.Word.keyboard.UP && !this.IsAboveGround()) {
        this.jump();
        }

    if (this.x < 4*720) {
        this.Word.Camera_X = -this.x +100 
    }

    
}, 1000/60);



   

 setInterval(() => {
   if (this.IsDead()) {this.animateImage(this.IMAGES_DEAD);}
    
   else if (this.IsHurt()) {this.animateImage(this.IMAGE_HURT);}
    
   else if (this.IsAboveGround()){
        this.animateImage(this.IMAGES_JUMP);}

  else {if (this.Word.keyboard.RIGHT || this.Word.keyboard.LEFT) {
        this.animateImage(this.IMAGES_WALKING)}}
     
    }, 25); 
    
    
        
    
   
 
   




}

jump(){
    this.speedY = 15;
}
}