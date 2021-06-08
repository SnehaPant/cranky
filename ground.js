class Ground{
    constructor(){
        var options={
           isStatic:true
        }
        this.body=Bodies.rectangle(400,600,800,20,options)
        World.add(world,this.body)
    }
    display(){
        fill('red')
        rectMode(CENTER)
        rect(400,600,800,20)
}
}
