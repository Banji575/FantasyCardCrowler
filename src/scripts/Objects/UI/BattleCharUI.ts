import { System } from "../../Systems/System"
import { Enemy } from "../Enemy"

export interface IconSet{
    set:string,
    name:string,
    frame:number
}

const icons:IconSet[] = [
    {set:'iconSet', name:'power', frame:85},
    {set:'iconSet2', name:'magicPower', frame:3},
    {set:'iconSet', name:'armor', frame:94},
    {set:'iconSet2', name:'magicArmor', frame:4},
    {set:'iconSet', name:'live', frame:6},
]

export class BattleCharUI extends Phaser.GameObjects.Sprite{
    iconSize:number = 32
    iconCount:number = 5
    iconPadding:number = 5
    system:System
    textStyle:object
    constructor(public scene:Phaser.Scene, public x:number, public y:number, public texture:any, private enemyes:Enemy[]){
        super(scene, x, y, texture)
        this.system = System.getInstance()
        this.textStyle ={font:`${15 * this.system.scale}px Arial`,fontStyle:'bold',color:'#fff' }
        this.init()
    }

    private init(){
        this.enemyes.forEach(el=>{
            const mainWindow = this.scene.add.sprite(this.x, this.y, this.texture).setOrigin(0,0.5).setScale(this.system.scale * 0.5)
           
            mainWindow.x = el.x
            mainWindow.y = el.y + (el.height * el.scaleY) * 2

            const namePlane = this.scene.add.sprite(mainWindow.x +(mainWindow.width * mainWindow.scaleX) / 2, mainWindow.y - (mainWindow.height * mainWindow.scaleY) / 2 , 'iconPlane').setOrigin(0.5).setScale(this.system.scale * 0.8)
            namePlane.y += ((namePlane.height * namePlane.scaleY) / 2) + this.iconPadding * (2*(mainWindow.scaleX))
            this.renderIcon(mainWindow, el)
        })  
    }

    private renderIcon(mainWindow:Phaser.GameObjects.Sprite, char:Enemy){

        const startPointY = mainWindow.y - (mainWindow.height * mainWindow.scale - ((this.iconSize*mainWindow.scaleX )* this.iconCount))/2
        
        icons.forEach((el,i)=>{
           const icon = this.scene.add.sprite(mainWindow.x + this.iconPadding * (10*(mainWindow.scaleX)) , (startPointY+ i * (this.iconSize*mainWindow.scaleX )) + this.iconPadding , el.set, el.frame).setOrigin(0,0.5).setScale(this.system.scale * 0.5)
           const text = this.scene.add.text(icon.x + this.iconPadding * (10*(mainWindow.scaleX)), icon.y, char.params[el.name], this.textStyle).setOrigin(0, 0.5)
        })
    }
}