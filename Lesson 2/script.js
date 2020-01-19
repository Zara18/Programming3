var blackArr = [];
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var beastArr = [];
var grassCreaterArr = [];
var side = 10;

let matrix = [];
let rows = 25;
let columns = 25;

for (let y = 0; y < rows; y++) {
    matrix[y] = [];
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 100);
        if (a >= 0 && a < 20) {
            matrix[y][x] = 0;
        }
        if (a >= 20 && a < 65) {
            matrix[y][x] = 1;
        }
        else if (a >= 40 && a < 87) {
            matrix[y][x] = 2;
        }
        else if (a >= 50 && a < 95) {
            matrix[y][x] = 3;
        }
        else if (a >= 70 && a < 98) {
            matrix[y][x] = 4;
        }
        else if (a >= 90 && a < 100) {
            matrix[y][x] = 5;
        }
    }
}

function setup() {
    frameRate(2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var et = new GrassEater(x, y, 2);
                grassEaterArr.push(et);

            }
            else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y, 3);
                predatorArr.push(pred);
            }
            else if (matrix[y][x] == 4) {
                var beast = new Beast(x, y, 4);
                beastArr.push(beast);
            }
            else if (matrix[y][x] == 5) {
                var cr = new GrassCreater(x, y, 5);
                grassCreaterArr.push(cr);
            }
        }
    }

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("pink");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }
    for (var i in predatorArr) {
        predatorArr[i].move();
        predatorArr[i].eat();
        predatorArr[i].mul();
        predatorArr[i].die();
    }
    for (var i in beastArr) {
        beastArr[i].move();
        beastArr[i].eat();
        beastArr[i].mul();
        beastArr[i].die();
    }
    for (var i in grassCreaterArr) {
        
        grassCreaterArr[i].eat();
        grassCreaterArr[i].mul();
        grassCreaterArr[i].die();
    }
}
