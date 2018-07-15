module scenes {
    export class PlayScene extends objects.Scene {
        // Private Instance Variables
        

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
           
            this.Main();

        }

        public Update() {



        }
        public Main(): void {
          
        }


    }
}