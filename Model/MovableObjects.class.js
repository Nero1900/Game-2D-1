

class MovableObject {
x = 20;
y = 315;
img;
h = 150;
w = 75;

LoadImage(path){
    this.img = new Image() // Image() == document.GetElementById('Image') // im HTML <img id = "Image" src="path"> // It is already defined by VS Code
    this.img.src = path;
}

MoveRight(){
    console.log('Move Right')
}

MoveLeft(){

}

}