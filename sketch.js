function setup() {
    createCanvas(innerWidth, innerHeight);
    noLoop();
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

function draw() {
    background(0, 25, 15);
    noFill()
    // stroke(255, 0, 255, 30)
    stroke(0, 185, 160, 10)
    // rect(500, 500, 200, 200)
    // let c = map(mouseY, 0, height, 0, 255)
    // fill(0, c, 125)
    fill(0, 185, 160, 40)
    // let w = map(mouseX, 0, width, 0, 500)
    // rect(500, 500, w, w)
    const size = 15;
    // for(let i = 0; i < 60000; i++){
    //     let x = random (width);
    //     let y = random (height);
    //     circle(x, y, size);
    // }

let x,y;

    for(let i = 0; i < 20000; i++){
        x = randomGaussian (width/2, 300);
        y = randomGaussian (height/2, 300);
        fill(0, 85, 60, 40)
        circle(x, y, size);
        x = randomGaussian (width/2, 225);
        y = randomGaussian (height/2, 125);
        fill(255, 255, 255, 60)
        circle(x, y, size);
        x = randomGaussian (width/2, 85);
        y = randomGaussian (height/2, 85);
        fill(0, 0, 0, 100)
        circle(x, y, size);
        x = randomGaussian (width/2, 20);
        y = randomGaussian (height/2, 60);
        fill(170, 0, 170, 60)
        circle(x, y, size);
    }
}

