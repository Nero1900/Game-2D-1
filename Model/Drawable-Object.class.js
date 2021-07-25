class DrawableObjects {
img;
ImageCache = {};
CurrentImgNumber = 0;
x = 20;
y = 315;
h = 150;
w = 75;


LoadImage(path){
    this.img = new Image() // Image() == document.GetElementById('Image') // im HTML <img id = "Image" src="path"> // It is already defined by VS Code
    this.img.src = path; // // Ich habe img als eine Image wie <img src="path"> definiert // dann habe ich den src durch this.img.src = path definiert
// Also hat jetzt img; einen wert nämlich <img src="path">

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

LoadImages(ArrayOfImagePaths){
    ArrayOfImagePaths.forEach(OneImagePath => {
     let img = new Image(); //Why not this.img!!!!!!!!!!!!!?????
     img.src = OneImagePath;
     img.style = 'transform: scaleX(-1)';
     this.ImageCache[OneImagePath] = img; //Why not Push!!!!!!!!!!!!!??????????
    });
    }

}