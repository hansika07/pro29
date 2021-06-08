class Sling {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 250
        }
        this.pointB = pointB

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null;
    }

    attach(body) {
        this.sling.bodyA = body;
        this.sling.visible = false;
    }


    display() {



        if (this.sling.bodyA) {

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB
            stroke("black")
            line(pointA.x, pointA.y, pointB.x, pointB.y);

            strokeWeight(4);
            stroke(64, 224, 208);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }




    }

}