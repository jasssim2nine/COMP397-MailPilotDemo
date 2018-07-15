module scenes {
    export class PlayScene extends objects.Scene {
        // Private Instance Variables
        private _playLabel: objects.Label;
        private _nextButton: objects.Button;
        private _backButton: objects.Button;

        // Public Properties


        //Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager)
            this.Start();
        }


        //Private Methods
        private _nextButtonClick(): void {

            objects.Game.currentScene = config.Scene.OVER;
        }

        private _backButtonClick(): void {

            objects.Game.currentScene = config.Scene.START;
        }

        //Public Methods

        //Initialize game variables and objects
        public Start(): void {
            this._playLabel = new objects.Label("Game Play", "45px", "consolas", "#000000", 320, 240, true);
            this._nextButton = new objects.Button(this.assetManager, "nextButton", 450, 400);
            this._backButton = new objects.Button(this.assetManager, "backButton", 150, 400);

            this.Main();

        }

        public Update() {



        }
        public Main(): void {
            this.addChild(this._playLabel);//add play label to the scene
            this.addChild(this._nextButton);//add next button
            this.addChild(this._backButton);//add back button
            
            //click events for next button and back button 
            this._backButton.on("click",this._backButtonClick);
            this._nextButton.on("click", this._nextButtonClick);
        }


    }
}