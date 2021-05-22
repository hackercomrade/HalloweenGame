class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1=loadImage("sprites/sling1a.png");
        this.sling2=loadImage("sprites/sling2a.png");
        this.sling3=loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyB = null;
    }

    attach(body){
        this.sling.bodyB = body;
    }

    display(){
        image(this.sling1, 200, 100)
        image(this.sling2, 170, 100)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            if(pointA.x < 220){
                strokeWeight(10);
                stroke("brown")
                line(pointA.x-50, pointA.y, pointB.x-10, pointB.y)
                line(pointA.x-50, pointA.y, pointB.x+30, pointB.y-3)
                // image(this.sling3, ponitA.x-30, pointA.y-10, 15, 30)
            }
            else{
                strokeWeight(9);
                stroke("brown")
                line(pointA.x+55, pointA.y, pointB.x-10, pointB.y)
                line(pointA.x+55, pointA.y, pointB.x+30, pointB.y-3)
                // image(this.sling3, ponitA.x+25, pointA.y-10, 15, 30)
            }
            pop()
        }
    }
    
}
