song1 = "";
song2 = "";

leftWristX = 0;
rightWristX = 0;

leftWristY = 0;
rightWristY = 0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    
    function modelLoaded() {
        console.log('PoseNet Is Initialized');
    }
    
    function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results);
            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
            console.log("leftWristX = " + leftWristX +" leftWrist = "+ leftWristY);
    
    
            rightWristX = results[0].pose.rightWrist.x;
            rightWristY = results[0].pose.rightWrist.y;
            console.log("rightWristX = " + rightWristX +" rightWrist = "+ rightWristY);
        }
    }

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song1.play();
    song2.play();
}