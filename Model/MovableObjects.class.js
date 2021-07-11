

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
}

MoveLeft_Character(){
    this.x = this.x -this.speed;
}


}