difference = "";
rightwristx = "";
leftwristx ="";




function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400); 
    video.position(); 
    canvas = createCanvas(400, 400);
    canvas.position(500,100);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}

function modelLoaded() {
    console.log("posenet is intialized");
    difference=floor(leftwristx-rightwristx);
    console.log(difference);
}



function draw() {
    background("#000080");
    fill("#808080");
    stroke("white");
    textSize(difference);
    text("font manipulator",leftwristx,rightwristx);
    rect(300,400,100,100);
}







function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
    }
}
