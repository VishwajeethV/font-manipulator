difference = "";
rightwristx = "";
leftwristx ="";
word ="";

function getext() {
    word=document.getElementById("123").value;
    console.log(word);
}


function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400); 
    video.position(); 
    canvas = createCanvas(400, 400);
    canvas.position(500,150);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',getposes);
}

function modelLoaded() {
    console.log("posenet is intialized");
}


function draw() {
    background("#000080");
    fill("#808080");
    stroke("white");
    textSize(difference);
    text(word,leftwristx,rightwristx);
    rect(300,400,100,100);
}







function getposes(results) {
    if(results.length > 0) {
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log(difference);
    }
    }

