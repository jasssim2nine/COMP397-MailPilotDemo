module scenes {
    export class PlayScene extends objects.Scene {
        // Private Instance Variables
            private _ocean: objects.Ocean;
            private _plane : objects.Plane;
            private _island : objects.Island;
            private _clouds:  objects.Cloud[];
            private _cloudNum : number;

            private _engineSound :  createjs.AbstractSoundInstance;

        // Public Properties


        //Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager)
            this.Start();
        }


        //Private Methods
        

        //Public Methods

        //Initialize game variables and objects
        public Start(): void {
               this._ocean = new objects.Ocean(this.assetManager);
               this._plane = new objects.Plane(this.assetManager);
               this._island = new objects.Island(this.assetManager);
              //instantiate the cloud array
              this._clouds = new Array<objects.Cloud>();
               
              this._cloudNum =3;
              //loop and add each cloud to the array
              for(let count= 0; count < this._cloudNum; count++)
              {
                  this._clouds[count] = new objects.Cloud(this.assetManager); 
              }

              //add engine sound

              this._engineSound = createjs.Sound.play("engine");
              this._engineSound.loop = -1;//play engine sound for ever
              this._engineSound.volume =0.3;
            this.Main();

        }
           
            //check every frame
        public Update() {

        this._ocean.Update();
        this._plane.Update();
        this._island.Update();
        //check collision between plane and island
        managers.Collision.Check(this._plane, this._island);
        this._clouds.forEach(cloud =>{
            cloud.Update();
            //check collision between plane and current cloud 
            managers.Collision.Check(this._plane, cloud);
        }); 
            }
        

        
        public Main(): void {
            //add ocean to the scene
            this.addChild(this._ocean);
            //add island to the scene
            this.addChild(this._island);
            //add plane to the scene
            this.addChild(this._plane);
            //add cloud to the scene
           this._clouds.forEach(cloud => 
        {
            this.addChild(cloud);
        });
            
          
        }


    }
}