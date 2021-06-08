class Box{
    constructor(x,y)
    {
        var options={
            restitution:0.2,
            friction:0.8,
             density:1
        }
          this.Body=Bodies.rectangle(x,y,50,50,options)
          World.add(world,this.Body)

    }
   
    display(){
        fill('lightblue')
     rectMode(CENTER)
      rect(this.Body.position.x,this.Body.position.y,50,50)
    }
    
}