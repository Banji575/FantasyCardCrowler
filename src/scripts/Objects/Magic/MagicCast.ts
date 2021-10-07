import { Enemy } from "../Enemy"

export default class MagicCast{
    currentMagic:Phaser.GameObjects.Sprite
    magicCollider:Phaser.Physics.Arcade.Collider

    constructor(public scene:Phaser.Scene){}

    cast(start:Enemy, target:Enemy, type:string, callback:Function){
        const magicSpritesheet = type + '_magic'
        this.currentMagic = this.scene.physics.add.sprite(start.x, start.y,magicSpritesheet,1).setInteractive().setOrigin(-0.5)

        this.scene.physics.moveTo(this.currentMagic, target.x, target.y,200)
        this.scene.anims.create({
            key:type,
            frames:this.currentMagic.anims.generateFrameNames(magicSpritesheet),
            frameRate:11,
            repeat:-1
        })
        this.currentMagic.anims.play(type)
        console.log(target.physicBody.body, this.currentMagic.body)
        this.magicCollider = this.scene.physics.add.overlap(target.physicBody, this.currentMagic, ()=>{this.magicOverlap(callback)})
        
    }

    private magicOverlap(callbaxk:Function){
        callbaxk()
        this.magicCollider.destroy()
        this.currentMagic.destroy()
    }
}