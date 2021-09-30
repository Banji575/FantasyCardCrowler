import Level from "../level/Level"
import Player from "../Player/Player"

export default class Main extends Phaser.Scene{
    player
    constructor(){
        super('main')
        
    }
    create(){
        const {width, height}= this.game.config
        const level = new Level(this)
        this.player = new Player(this, 350 ,150,'playerIdle',1)

        this.physics.add.collider(level.platform, this.player, ()=>{})
    }

    update(){
        this.player.colliderSync()
    }
}