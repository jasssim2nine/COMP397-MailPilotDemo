module scenes {
    export class OverScene extends objects.Scene {
        // Private Instance Variables
        private _overLabel: objects.Label;
        private _backButton: objects.Button;

        // Public Properties


        //Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager)
            this.Start();
        }


        //Private Methods
        

        private _backButtonClick(): void {

            objects.Game.currentScene = config.Scene.PLAY;
        }

        //Public Methods

        //Initialize game variables and objects
        public Start(): void {
            this._overLabel = new objects.Label("Game Over", "45px", "consolas", "#000000", 320, 240, true);
            this._backButton = new objects.Button(this.assetManager, "backButton", 320, 400);

            this.Main();

        }

        public Update() {



        }
        public Main(): void {
            this.addChild(this._overLabel);//add play label to the scene
            this.addChild(this._backButton);//add back button
            
            //click events for next button and back button 
            this._backButton.on("click",this._backButtonClick);
        }


    }
}