module scenes {
    export class PlayScene extends objects.Scene {
        // Private Instance Variables
            private _ocean: objects.Ocean;

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
            this.Main();

        }

        public Update() {

        this._ocean.Update();

        }
        public Main(): void {
            //add ocean to the scene
            this.addChild(this._ocean);
          
        }


    }
}