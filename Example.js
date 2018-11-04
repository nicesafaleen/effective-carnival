class Example extends Phaser.Scene {
    constructor() {
        super({key:"Example"});
    }

    preload() {
        this.load.image('GFS','assets/GFS.jpg');
    }

    create(){
        this.image = this.add.image(400,300,'GFS');
        this.input.keyboard.on('keyup_D', function(event){
            this.image.x +=10;
        },this);
    }

}