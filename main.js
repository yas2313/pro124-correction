function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);
    canvas = createCanvas(700, 600);
    canvas.position(560, 110);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
}
function modelLoaded()
{
    console.log("poseNet Model is Loaded");
}
function draw()
{
    background('#91C0BC');
}