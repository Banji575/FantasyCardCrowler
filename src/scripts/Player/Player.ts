export default class Player extends Phaser.GameObjects.Sprite{
    player
    constructor(public scene: Phaser.Scene, public x:number, public y:number,texture: string, frame:number){
        super(scene, x, y, texture)
        this.init()
        return this.player
    }

    init(){
        this.scene.add.existing(this).setOrigin(1).setScale(1)
        this.animCreate()
        this.play('idleAnim')
        this.player = this.createPlayerCollider()
    }

     colliderSync(){
        this.x = this.player.x
        this.y = this.player.y
    }

    private createPlayerCollider(){
       const rect = this.scene.add.rectangle(300,300, 50,50)
        this.scene.physics.add.existing(rect)
        return rect
    }

    private animCreate(){
        this.anims.create({
            key:'idleAnim',
            frames: this.anims.generateFrameNames('playerIdle'),
            frameRate:11,
            repeat:-1
        })
    }

}