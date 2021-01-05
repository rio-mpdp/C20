function setup (){
    createCanvas(800,800)
    a= createSprite(200,200,40,40);
    b= createSprite(300,300,30,30);
}
function draw (){
    background("blue")
b.x=mouseX
b.y=mouseY
if(a.x-b.x<=a.width/2+b.width/2
    &&b.x-a.x<=a.width/2+b.width/2
    && a.y-b.y<=a.height/2+b.height/2
    &&b.y-a.y<=a.height/2+b.height/2 ){
 a.shapeColor="red"
 b.shapeColor= "red"
}
else{
    a.shapeColor="green"
    b.shapeColor= "green"  
}
text(a.x-b.x+"\t"+(a.width/2+b.width/2),200,30)


    drawSprites ();
}
var a,b;