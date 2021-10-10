import { keyboardDirection } from "../Systems/KeyboardDirection"
import Character from "./Character"

export default class Player extends Character{
    player
    isRun
    constructor(public scene: Phaser.Scene, public x:number, public y:number,texture: string, frame:number){
        super(scene, x, y, texture, frame)
        this.isRun = false
        this.initial()
    }

    initial(){
        this.animCreate()
        this.animRunCreate()
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
    private animRunCreate(){
        this.anims.create({
            key:'playerRun',
            frames: this.anims.generateFrameNames('playerRun'),
            frameRate:8,
            repeat:-1
        })
    }

    public getDamage(){}

    move(dir:string | number){
            const {x,y} = keyboardDirection[dir]
            this.x += x
            this.y += y
            if((x!==0|| y!==0) && !this.isRun){
                this.play('playerRun')
                this.isRun = true
            }
    }

}