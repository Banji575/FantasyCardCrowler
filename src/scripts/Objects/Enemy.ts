import Character from "./Character";
import { EnemyAnimation, EnemyConfig } from "./Enemy/EnemyFactory";

export class Enemy extends Character{
    constructor(public scene:Phaser.Scene,public x:number, public y:number,texture:string, frame:number, public enemyAnimation:EnemyAnimation){
        super(scene, x, y, texture, frame)
        this.createAnimation()
        this.animationStart()

    }
    private createAnimation(){
        Object.keys(this.enemyAnimation).forEach(el=>{
            if(this.enemyAnimation[el] === null) return
            console.log(el)
            this.scene.anims.create({
                key:el,
                frames:this.anims.generateFrameNames(this.enemyAnimation[el]),
                frameRate:11,
                repeat:-1
            })
        })
    }

    public animationStart(name:string = 'idle'){
        this.play(name)
    }

    public underAim(isAim:boolean){
       if(isAim){
            this.setTint(0xff0000)
        }else{
            this.setTint(0xffffff)
        }
    }
    move(){}
}