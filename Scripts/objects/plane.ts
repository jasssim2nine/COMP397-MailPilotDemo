module objects{
    export class Plane extends objects.GameObject{
    
        //Private Instance Variables
            



        // Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager,"plane");
            this.Start();
            
            }

            //Private Methods
            

            //public Methods

            //Initializes variables and set speed
            public Start():void{
                this.y = 430;
               
            }
            
            public Update():void{
                this.Move();
                this.CheckBounds();
            }
            public Reset():void{
                
            }

           public Move():void{
                this.x = objects.Game.stage.mouseX;
                
            }

            public CheckBounds():void{
                //right boundary
                    if(this.x >=640 - this.halfWidth)
                    {
                        this.x = 640 - this.halfWidth;
                    }
                //left boundary
                if(this.x <= this.halfWidth){
                    this.x = this.halfWidth;
                }
              
            }
               
    }
}