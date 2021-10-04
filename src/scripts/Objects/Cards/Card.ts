import { System } from "../../Systems/System"



export class Card extends Phaser.GameObjects.Sprite{
    defaultScale:number
    system:System
    cardGameId:number
    cardLibrId:number
    constructor(public scene: Phaser.Scene,public x:number, public y:number,texture:string){
        super(scene, x, y, texture)
        this.defaultScale = 0.25
        this.system = System.getInstance()
        this.createCart()
        
        
    }

    get _x (){
       return this.x
    }

    set _x(value:number){
        this.x = value
    }



    createCart(){
        this.scene.add.existing(this).setOrigin(0).setScale(this.defaultScale * this.system.scale)
    }

}