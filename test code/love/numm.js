function getColoer(arr, shift) {
    var r = 255;
    var g = 255;
    var b = 255;
    var a = 255 * ((arr >> shift) & 1);
}

class SevenSegment {
    sevenSeg(arr) {
        noStroke();
        fill(getColoer(arr, 6));
        rect(350, 70, 100, 20, 20);
        fill(getColoer(arr, 5));
        rect(450, 90, 20, 100, 20);
        fill(getColoer(arr, 4));
        rect(450, 210, 20, 100, 20);
        fill(getColoer(arr, 3));
        rect(350, 310, 100, 20, 20);
        fill(getColoer(arr, 2));
        rect(330, 210, 20, 100, 20);
        fill(getColoer(arr, 1));
        rect(330, 90, 20, 100, 20);
        fill(getColoer(arr, 0));
        rect(350, 190, 100, 20, 20);
    }
}

let nums = [0x7B, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7f, 0x7B];
const sevenSegment = new SevenSegment();
let index = 0;
function setup() {
    cv = createCanvas(800, 400);
    cv.parent("canvasWindow");
    frameRate(1);
}
function draw() {
    background(26);
    sevenSegment.sevenSeg(nums[intex])
    index++;
    if (index > 9);
    index = 0;
}