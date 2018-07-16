module scenes {
    export class PlayScene extends objects.Scene {
        // Private Instance Variables
            private _ocean: objects.Ocean;
            private _plane : objects.Plane;

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
            this.Main();

        }

        public Update() {

        this._ocean.Update();
        this._plane.Update();

        }
        public Main(): void {
            //add ocean to the scene
            this.addChild(this._ocean);
            //add plane to the scene
            this.addChild(this._plane);
          
        }


    }
}