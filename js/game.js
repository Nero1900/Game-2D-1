let canvas;

let word;




function init(){
   
    canvas = document.getElementById('canvas');
    word = new Word(canvas);
    
    
    console.log('My Character is', word.character);
}