function setup(){
    createCanvas(800,800);
    background(0,0,0);
}




function draw(){
    rect(30, 20, 55, 55);
    rect(40, 100, 65, 65);
    rect(50, 180, 75, 75);
    rect(60, 360, 85, 85);
}

function setup(){
    createCanvas(1000,1000);
    background(130,233,34);
}

let start = 0;
let end = 1000;
let fir = 100;

function draw(){
    fill(255,255,255);
    line(fir,start,fir,end);
    line(start,fir,end,fir);
    fir = fir + 100;
}
 let board = [
     [0,0,0,0,1,0,0,0,0,0]
     [0,0,0,0,0,0,0,0,1,0]
     [1,0,0,0,0,0,0,0,0,0]
     [0,0,0,0,0,1,0,0,0,0]
     [0,0,0,0,0,0,0,0,0,1]
     [0,0,0,0,0,0,0,1,0,0]
     [0,0,1,0,0,0,0,0,0,0]
     [0,0,0,0,0,0,0,0,1,0]
     [0,0,0,0,0,0,1,0,0,0]
     [0,0,0,1,0,0,0,0,0,0]
     [0,1,0,0,0,0,0,0,0,0]
]

let miss = 0
let hit = 1

//runs when mouse is clicked
function mouseClicked(){
    let x = Math.floor(mouseX/100);
    let y = Math.floor(mouseY/100);
    console.log(x, y);
}
