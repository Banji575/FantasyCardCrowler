export default abstract class Character extends Phaser.GameObjects.Sprite{
    
    constructor(public scene: Phaser.Scene, public x:number, public y:number,texture: string, frame:number){
        super(scene, x, y, texture)
        this.init()
    }

    init(){
        this.scene.add.existing(this).setOrigin(1).setScale(1)
    }

   abstract move(params?:any)
}