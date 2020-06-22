class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingI= loadImage("sprites/sling1.png");
        this.slingII= loadImage("sprites/sling2.png");
        this.slingIII= loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //imageMode(CENTER);
        image(this.slingI,200,20);
        image(this.slingII,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x-30,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x,pointA.y,pointB.x+30,pointB.y);
            image(this.slingIII,pointA.x-30,pointA.y-10,20,40)
        }
    }
    
}