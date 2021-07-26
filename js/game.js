let canvas;

let word;
let keyboard = new Keyboard(); 




function init(){
   
    canvas = document.getElementById('canvas');
    word = new Word(canvas, keyboard); // warum World(canvas) !!!???? wir laden den div <canvas> in der variable canvas und dan laden wir canvas in world
    
    
    console.log('My Character is', word.character, keyboard);
}

window.addEventListener("keydown", (e) => {
    if (e.code == "Space") {
        keyboard.SPACE = true;
    }  // for using keycode = 32
    if (e.code == "ArrowLeft") {
        keyboard.LEFT = true;
    } // for using keycode = 37
    if (e.code == "ArrowRight") {
        keyboard.RIGHT = true;
    } // for using keycode = 39
    if (e.code == "ArrowUp") {
        keyboard.UP = true;
    } // for using keycode = 38
    if (e.code == "ArrowDown") {
        keyboard.DOWN = true;
    } // for using keycode = 40
    if (e.keyCode == "68") {
        keyboard.D = true;
    }  // for using keycode = 68
    console.log(e);
});

window.addEventListener("keyup", (e) => {
    if (e.code == "Space") {
        keyboard.SPACE = false;
    }  // for using keycode = 32
    if (e.code == "ArrowLeft") {
        keyboard.LEFT = false;
    } // for using keycode = 37
    if (e.code == "ArrowRight") {
        keyboard.RIGHT = false;
    } // for using keycode = 39
    if (e.code == "ArrowUp") {
        keyboard.UP = false;
    } // for using keycode = 38
    if (e.code == "ArrowDown") {
        keyboard.DOWN = false;
    } // for using keycode = 40
    if (e.keyCode == "68") {
        keyboard.D = false;
    }  // for using keycode = 68
    console.log(e);
});