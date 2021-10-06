import { CardProps } from "../../Systems/cardLibr"
import { System } from "../../Systems/System"



export class Card extends Phaser.GameObjects.Sprite{
    defaultScale:number
    system:System
    cardGameId:number
    cardLibrId:number
    name:string
    cardProps:CardProps
    type:string
    textStyle:Phaser.Types.GameObjects.Text.TextStyle
    textName: Phaser.GameObjects.Text
    image:Phaser.GameObjects.Image

    constructor(public scene: Phaser.Scene,public x:number, public y:number,texture:string,public config:any){
        super(scene, x, y, texture)
        this.defaultScale = 0.25
        this.system = System.getInstance()
       
        this.cardGameId = config.cardGameId
        this.cardLibrId = config.id
        this.name = config.name
        this.type = config.type
        this.cardProps = {
            power:config.props.power,
            armor:config.props.armor,
            damage:config.props.damage
        }
        this.textStyle ={font:`${15*this.system.scale * 0.9 }px Arial`,fontStyle:'bold',color:'#000' }

        this.createCart()
        this.createText()
        this.createCardArt()
    }

    get _x (){
       return this.x
    }

    set _x(value:number){
        this.x = value
    }



    createCart(){
        this.scene.add.existing(this).setOrigin(0).setScale(this.defaultScale * this.system.scale).setDepth(10)
    }

    createText(){
       this.textName = this.scene.add.text(100, 150, this.name, this.textStyle).setDepth(100).setOrigin(0,0.5)
    }

    createCardArt(){
        this.image = this.scene.add.image(0,0,this.name.replace(/\s/g, '')).setScale(this.system.scale * 0.4).setOrigin(0,0.5).setDepth(9)
        const img = this.name.trim()
    }

    syncElem(){
        this.textName.x = this.x
        this.textName.y = this.y - (this.height * this.scaleY) / 2 + (this.textName.height * this.textName.scaleY)/2

        this.image.x = this.x + (this.image.width * this.image.scaleX)/10
        this.image.y = this.y - (this.image.height * this.image.scaleY)/3.2
        // console.log(this.textName.x)
        
    }

    destroyCard(){
        this.destroy()
        this.textName.destroy()
        this.image.destroy()
    }

}