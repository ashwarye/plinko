class Plinko {
    constructor(x,y,r){
        var options ={
            isStatic:true
        }
        r=10
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.color=color(0,0,0)
    }
    display(){
       
        var pos = this.body.position;
        var angle = this.body.angle;

push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
};