class Rope{
    constructor(body1,body2,offsetX,offsetY){
       this.offsetX=offsetX
       this.offsetY=offsetY
        var options={
         bodyA:body1,bodyB:body2,pointB:{x:this.offsetX,y:this.offsetY}    
        }
         
           this.rope=Constraint.create(options)
            World.add(world,this.rope)
    }
  
    display(){
       
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position
   
     strokeWeight(2)
     var anker1X=pointA.x
     var anker1Y=pointA.y
     var anker2X=pointB.x+this.offsetX
     var anker2Y=pointB.y+this.offsetY

        line(anker1X,anker1Y,anker2X,anker2Y)
           }}
