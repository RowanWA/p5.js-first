let p = {x:400, y:300}; 
let pSize = 20;
let speed = 5;
let theta = 4;

function setup() {
    createCanvas(innerWidth, innerHeight);
    // noLoop();
    rectMode(CENTER);
}

//   function draw() {
//     background(0);
//     fill(0, 185, 160)
//     stroke(0, 185, 160)
//     circle(400, 400, 150)
//     circle(400, 300, 150)
//     rect(325, 300, 150, 100)
//     triangle(400, 375, 475, 650, 325, 650)
//   }

// function draw() {
//     background(0, 25, 15);
//     noFill()
//     stroke(0, 185, 160, 10)
//     fill(0, 185, 160, 40)
//     const size = 15;
// // let x,y;

//     for(let i = 0; i < 20000; i++){
//         x = randomGaussian (width/2, 300);
//         y = randomGaussian (height/2, 300);
//         fill(0, 85, 60, 40)
//         circle(x, y, size);
//         x = randomGaussian (width, 200);
//         y = randomGaussian (height, 200);
//         fill(0, 5, 5, 75)
//         circle(x, y, size);
//         x = randomGaussian (width, 200);
//         y = randomGaussian (height-height, 200);
//         fill(0, 5, 5, 75)
//         circle(x, y, size);
//         x = randomGaussian (width-width, 200);
//         y = randomGaussian (height, 200);
//         fill(0, 5, 5, 75)
//         circle(x, y, size);
//         x = randomGaussian (width-width, 200);
//         y = randomGaussian (height-height, 200);
//         fill(0, 5, 5, 75)
//         circle(x, y, size);
//         x = randomGaussian (width-width, 50);
//         y = randomGaussian (height-height, height);
//         fill(0, 5, 5, 100)
//         circle(x, y, size);
//         x = randomGaussian (width, 50);
//         y = randomGaussian (height-height, height);
//         fill(0, 5, 5, 100)
//         circle(x, y, size);
//         x = randomGaussian (width, width);
//         y = randomGaussian (height-height, 100);
//         fill(0, 5, 5, 150)
//         circle(x, y, size);
//         x = randomGaussian (width, width);
//         y = randomGaussian (height, 100);
//         fill(0, 5, 5, 150)
//         circle(x, y, size);
//         x = randomGaussian (width/2, 225);
//         y = randomGaussian (height/2, 125);
//         fill(255, 255, 255, 60)
//         circle(x, y, size);
//         x = randomGaussian (width/2, 85);
//         y = randomGaussian (height/2, 85);
//         fill(0, 0, 0, 100)
//         circle(x, y, size);
//         x = randomGaussian (width/2, 20);
//         y = randomGaussian (height/2, 60);
//         fill(170, 0, 170, 60)
//         circle(x, y, size);
//     }
// }



// function draw() {
//     background(255, 255, 255);
//     stroke(0, 185, 160, 10)
//     fill(0, 185, 160, 40)
//     arc(width/2, height/2, 400, 400, 0, random(TAU))
// }


function draw() {
    background(220);
    stroke(0, 185, 160, 10)
    fill(0, 185, 160)
    p.x = cos(theta) * speed;
    p.y = sin(theta) * speed;
    circle(p.x, p.y, pSize);
}

