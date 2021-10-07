import { Enemy } from "../Enemy"

export default class MagicCast{
    currentMagic:Phaser.GameObjects.Sprite
    magicCollider:Phaser.Physics.Arcade.Collider
    magicEffectSpritesheet:string
    constructor(public scene:Phaser.Scene){}

    cast(start:Enemy, target:Enemy, type:string, callback:Function){
        const magicSpellSpritesheet = type + '_magic'
        this.magicEffectSpritesheet = type + '_effect'
        this.currentMagic = this.scene.physics.add.sprite(start.x, start.y,magicSpellSpritesheet,1).setInteractive().setOrigin(-0.5)

        this.scene.physics.moveTo(this.currentMagic, target.x, target.y,200)
        this.scene.anims.create({
            key:type,
            frames:this.currentMagic.anims.generateFrameNames(magicSpellSpritesheet),
            frameRate:11,
            repeat:-1
        })

        this.scene.anims.create({
            key:this.magicEffectSpritesheet,
            frames:this.currentMagic.anims.generateFrameNames(this.magicEffectSpritesheet),
            frameRate:11,
            repeat:0
        })

        this.currentMagic.anims.play(type)
        console.log(target.physicBody.body, this.currentMagic.body)
        this.magicCollider = this.scene.physics.add.overlap(target.physicBody, this.currentMagic, (point, d)=>{this.magicOverlap(point,d,callback)})
        
    }

    private magicOverlap(point, d, callbaxk:Function){
        console.log(point,d)
        const magicEffect = this.scene.physics.add.sprite(d.x + (d.width * d.scaleX) / 2, d.y,this.magicEffectSpritesheet,1).setInteractive().setOrigin(-0.5)
        magicEffect.play(this.magicEffectSpritesheet).on('animationcomplete',()=>magicEffect.destroy())
        callbaxk()
        this.magicCollider.destroy()
        this.currentMagic.destroy()
    }
}