module managers{
    export class Collision {
        
        public static Check(object1:objects.GameObject, object2:objects.GameObject){

            //create vec2 objects
        let P1 : math.Vec2 = new math.Vec2(object1.x,object1.y);
        let P2 : math.Vec2 = new math.Vec2(object2.x,object2.y);
            
        if(math.Vec2.Distance(P1,P2) < (object1.halfHeight + object2.halfHeight)){
            if(!object2.isColliding){
                console.log("COllision!!" + object2.name);
                object2.isColliding = true;
            }
                
        }
        else {
            object2.isColliding = false;
        }
     }
    }
}