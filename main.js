function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400);  
    canvas = createCanvas(400, 400);
    canvas.position(500,100);
}