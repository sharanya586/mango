class Mango{
    constructor(x, y, width){
       var options = {
           isStatic: true,
           restitution: 0.1,
           friction: 1
       } 
       this.body = Bodies.circle(x,y,width,options);
       this.x = x;
       this.y = y;
       this.r=30
       this.width = width;
       this.image = loadImage('Images/mango.png');
       World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, 100, 100);
        console.log(this.body.position.y)
        pop();
    }
}