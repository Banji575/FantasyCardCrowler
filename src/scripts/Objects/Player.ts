import { keyboardDirection } from "../Systems/KeyboardDirection"
import Character from "./Character"

export default class Player extends Character{
    player
    constructor(public scene: Phaser.Scene, public x:number, public y:number,texture: string, frame:number){
        super(scene, x, y, texture, frame)
        this.initial()
    }

    initial(){
        this.animCreate()
        //this.scene.physics.add.existing(this)
        this.play('idleAnim')
        
    }


    private animCreate(){
        this.anims.create({
            key:'idleAnim',
            frames: this.anims.generateFrameNames('playerIdle'),
            frameRate:11,
            repeat:-1
        })
    }

    move(dir:string | number){
            const x = keyboardDirection[dir].x

       
        this.y -= 1
    }

}