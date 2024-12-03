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
    stroke(0, 185, 160, 100)
    // rect(500, 500, 200, 200)
    // let c = map(mouseY, 0, height, 0, 255)
    // fill(0, c, 125)
    fill(0, 185, 160, 100)
    // let w = map(mouseX, 0, width, 0, 500)
    // rect(500, 500, w, w)
    const size = 20;
    for(let i = 0; i < 20000; i++){
        let x = random (size/2, width - size/2);
        let y = random (size/2, height - size/2);
        square(x, y, size);
    }
}

