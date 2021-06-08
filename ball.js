class Ball{
    constructor(x,y,r){
        var options={
            restitution:0.3,
            density:1
          
        }
        this.r=r
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body)
    }
    display(){
        fill('golden')
       ellipseMode(RADIUS)
       ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    }
}
