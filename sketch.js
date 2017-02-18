
function setup() 
{
 createCanvas(600,1000);

  
}
 function preload() {
  myImg = loadImage("la la land.jpg");
}


function draw() 
{
  
  image(myImg, 0, 0, 600, 1000);
    
   translate(0, -1*(height/17));
    background(myImg);
    textFont('Gothic Century')
    fill(0,0,0);
    textSize(height/4);
    textAlign(CENTER);
    text(hour(),width/2,height/4);
    textSize(height/4);
    textAlign(CENTER);
    text(minute(),width/2,height/3*2);
    textSize(height/4);
    textAlign(CENTER);
    text(second(),width/2,height/3*3);

 
}
 
