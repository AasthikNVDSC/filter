eyeX = 0;
eyeY = 0;


function preload(){
glasses_image = loadImage("https://i.postimg.cc/vHKS6xyc/glasses.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function draw(){
image(video,0,0,300,300);
//fill(237, 43, 33)
//stroke(0, 0, 0)
//circle(noseX,noseY,20)
image(glasses_image,eyeX,eyeY,90,80);
}

function takeSnapshot(){
    save('myFilterImage.png');
}

function gotPoses(results){
    if(results.length > 0){
        eyeX = results[0].pose.rightEye.x - 15;
        eyeY = results[0].pose.rightEye.y - 35;
        console.log("eye x = " + eyeX);
        console.log("eye y = " + eyeY);
    }
}