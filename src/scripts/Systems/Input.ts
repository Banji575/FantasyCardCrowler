import Player from "../Objects/Player"

export class InputSystem extends Phaser.Input.InputPlugin{
    private cursor: Phaser.Types.Input.Keyboard.CursorKeys
    private player: Player
    constructor(public scene:Phaser.Scene, player:Player){
        super(scene)
        this.cursor = this.scene.input.keyboard.createCursorKeys()
        this.player = player
    }

    keyboardController(){
        if(this.cursor.up.isDown){
           this.player.move('up')
        }
        if(this.cursor.down.isDown){
            this.player.move('down')
        }
        if(this.cursor.left.isDown){
            this.player.move('left')
        }
        if(this.cursor.right.isDown){
            this.player.move('right')
        }
    }
}