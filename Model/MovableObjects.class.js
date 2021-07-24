

class MovableObject {
x = 20;
y = 315;
img;
h = 150;
w = 75;
speed = 5;
ImageCache = {};
CurrentImgNumber = 0;
Otherdirection = false;
lasthit = 0;


LoadImage(path){
    this.img = new Image() // Image() == document.GetElementById('Image') // im HTML <img id = "Image" src="path"> // It is already defined by VS Code
    this.img.src = path; // // Ich habe img als eine Image wie <img src="path"> definiert // dann habe ich den src durch this.img.src = path definiert
// Also hat jetzt img; einen wert nämlich <img src="path">

}

LoadImages(ArrayOfImagePaths){
ArrayOfImagePaths.forEach(OneImagePath => {
 let img = new Image(); //Why not this.img!!!!!!!!!!!!!?????
 img.src = OneImagePath;
 this.ImageCache[OneImagePath] = img; //Why not Push!!!!!!!!!!!!!??????????
});
}


LoadImages_JUMP(ArrayOfImagePaths){
    ArrayOfImagePaths.forEach(OneImagePath => {
     let img = new Image(); //Why not this.img!!!!!!!!!!!!!?????
     img.src = OneImagePath;
     this.ImageCache[OneImagePath] = img; //Why not Push!!!!!!!!!!!!!??????????
    });
    }


animateImage(Image){
    let i = this.CurrentImgNumber % Image.length;
        let CurrentImgPath = Image[i];
        this.img = this.ImageCache[CurrentImgPath]; // Where is img / where is ImageCache ???? why this.img and ImageCache works??
        this.CurrentImgNumber++;  
}


MoveLeft(){setInterval(() => {
    
    this.x = this.x -this.speed 
}, 80);
}

MoveRight_Character(){
    this.x = this.x +this.speed;
    this.Otherdirection = false;
    //this.WALKING_FORWARD_SOUND.play();
    
}

MoveLeft_Character(){
    this.x -= this.speed;
        this.Otherdirection = true;
        //this.WALKING_FORWARD_SOUND.play();
}

draw(ctx){
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

ShowFrame(ctx){
    if(this instanceof Character || this instanceof Chicken){
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "red";
    ctx.rect( this.x, this.y, this.w, this.h);
    ctx.stroke();}
}

IsColliding(mo){
    return this.x + this.w > mo.x &&
    this.y + this.h > mo.y &&
    this.x < mo.x &&
    this.y < mo.y + mo.h;}


    Hit(){
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
            console.log('Character is dead');
        }
        else{this.lasthit = new Date().getTime();}
        console.log('Is Collision', this.energy)
    }

    IsHurt(){
        let timespan = new Date().getTime() - this.lasthit ; // difference in ms
       return timespan <750 ; // = 0.75 second
    }

    IsDead(){
        return this.energy == 0;
       } // this function returns TRUE or FALSE (BOOLEAN)


}