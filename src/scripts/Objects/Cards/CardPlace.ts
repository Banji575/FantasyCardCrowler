import { System } from "../../Systems/System"

export class CardPlace {
    system: System
    cardPlace:Phaser.GameObjects.Image
    constructor(private scene: Phaser.Scene){
        this.system = System.getInstance()
        this.init()
    }

    init(){
        this.createCardPlace()
    }

    createCardPlace(){
        const x = 0
        const y = this.system.height/3
        this.cardPlace = this.scene.add.image(x,y,'cardPlace').setOrigin(0).setScale(this.system.scale)
        this.cardPlace.scaleY *= this.system.aspect
        this.cardPlace.y = this.system.height - this.cardPlace.height * this.cardPlace.scaleY

    }

    get cardPlaceObject(){
        return this.cardPlace
    }

    
}