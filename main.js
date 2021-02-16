function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400); 
    video.position(); 
    canvas = createCanvas(400, 400);
    canvas.position(500,100);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',getposes);
}

function modelLoaded() {
    console.log("posenet is intialized");
}


function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log(difference);
    }
}
