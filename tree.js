class Tree{
    constructor(x, y, width, height){
       var options = {
           isStatic: true
       } 
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       this.image = loadImage('Images/tree.png');
       World.add(world, this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
    }
}