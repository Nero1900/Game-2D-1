class Endboss extends MovableObject {


    h = 400;
    w = 300;
    y = 80;
   
    IMAGES_WALKING = [
       'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
       'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
       'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
       'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
       'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
       'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
       'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
       'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'

    ]

    

    constructor(){
       
        super().LoadImage(this.IMAGES_WALKING[0])
        this.LoadImages(this.IMAGES_WALKING);
        this.x = 5*635;
       
        this.animate();
        
    
    }

    animate(){
      
     
            setInterval(() => {
               this.animateImage(this.IMAGES_WALKING)
           
        }, 100);
        





}}