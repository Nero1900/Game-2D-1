class Chicken extends MovableObject{

    h = 100;
    w = 50;
    y = 370;
    IMAGES_WALKING = ['img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ]

    

    constructor(){
       
        super().LoadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')
        this.LoadImages(this.IMAGES_WALKING);
        this.x = 200+Math.random()*500;
       
        this.animate();
        
    
    }

    animate(){
        this.speed = 0.2 +Math.random() * 4
        this.MoveLeft();
            setInterval(() => {
                this.animateImage(this.IMAGES_WALKING)
           
        }, 100);
        
 



    }
    

}