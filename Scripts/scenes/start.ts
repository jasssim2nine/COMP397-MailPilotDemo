module scenes {
    export class StartScene extends objects.Scene {
        // Private Instance Variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _ocean : objects.Ocean;

        // Public Properties


        //Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager)
            this.Start();
        }


        //Private Methods
        private _startButtonClick(): void {

            objects.Game.currentScene = config.Scene.PLAY;
        }

        //Public Methods

        //Initialize game variables and objects
        public Start(): void {
                this._ocean = new objects.Ocean(this.assetManager);

            this._welcomeLabel = new objects.Label("Mail Pilot", "60px", "consolas", "#FFFF00", 325, 160, true);
            this._startButton = new objects.Button(this.assetManager, "startButton", 320, 340);
            this.Main();

        }

        public Update() {
                this._ocean.Update();


        }
        public Main(): void {
            //add a ocean 
            this.addChild(this._ocean);
            this.addChild(this._welcomeLabel);//add welcome label to the scene
            this.addChild(this._startButton);

            this._startButton.on("click", this._startButtonClick);
        }


    }
}