export default class Player extends Phaser.GameObjects.Sprite{
    constructor(public scene: Phaser.Scene, public x:number, public y:number,texture: string, frame:number){
        super(scene, x, y, texture)
        this.init()
        return this
    }

    init(){
        this.scene.add.existing(this).setOrigin(1).setScale(1)
        this.scene.physics.add.existing(this)
        this.animCreate()
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

}