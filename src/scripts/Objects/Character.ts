export interface parametrs{
    power:number,
    armor:number,
    damage:number
}

export default abstract class Character extends Phaser.GameObjects.Sprite{
    physicBody: Phaser.GameObjects.Rectangle
    
    constructor(public scene: Phaser.Scene, public x:number, public y:number,texture: string, frame:number){
        super(scene, x, y, texture)
        this.init()
    }

    init(){
      const enemy = this.scene.add.existing(this).setOrigin(1).setScale(1).setOrigin(0)
      this.physicBody = this.scene.add.rectangle(enemy.x + (enemy.width*enemy.scaleX) / 4, enemy.y + (enemy.height*enemy.scaleY) / 4,enemy.width*enemy.scaleX / 2,enemy.y - enemy.height*enemy.scaleY / 2).setOrigin(0).setInteractive()
      this.scene.physics.add.existing(this.physicBody)
      this.scene.physics.add.existing(enemy)
       
    }

   abstract move(params?:any)
}