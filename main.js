
img="";
status1="";
function preload() {
    img=loadImage("dog_cat.jpg");
}
function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd',modalLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function draw() {
    image(img,0,0,640,420);
    fill("#00FF0E");
    text("Dog",60,60);
    noFill();
    stroke("#00FF0E");
    rect(45,50,285,370);

    fill("#FF0000");
    text("Cat",320,120);
    noFill();
    stroke("#00FF0E");
    rect(300,90,270,320);
}
function modalLoaded() {
    console.log("Modal is Loaded");
    status1= true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,result) {
   if(error) {
       console.log(error);
   }
   console.log(result);
}