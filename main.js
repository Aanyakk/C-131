img="";

function preload()
{
img=loadImage("dog_cat.jpg");
}

function setup()
{
canvas=createCanvas(664,420);
canvas.center();

}

function draw()
{
image(img,0,0,664,420)
fill("#FF0000");
text("dog",45,75);
noFill();
stroke("#FF0000");
rect(30,60,450,350);
}