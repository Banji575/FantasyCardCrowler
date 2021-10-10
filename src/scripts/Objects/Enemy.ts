import { GameObjects } from "phaser";
import Character from "./Character";
import { CharParams, EnemyAnimation, EnemyConfig } from "./Enemy/EnemyFactory";

interface Position {
    x:number,
    y:number
}
export class Enemy extends Character{
    enemyCollider:Phaser.Physics.Arcade.Collider
    startPosition: Position 
    constructor(public scene:Phaser.Scene,public x:number, public y:number,texture:string, frame:number, public enemyAnimation:EnemyAnimation, public params: CharParams){
        super(scene, x, y, texture, frame)
        this.createAnimation()
        this.animationStart()
        
        this.startPosition = {x:this.x, y:this.y}
        // this.startPosition.x = this.x
        // this.startPosition.y = this.y
    }


    private createAnimation(){
        Object.keys(this.enemyAnimation).forEach(el=>{
            console.log(el)
            if(this.enemyAnimation[el] === null) return
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
    public getDamage(){
        
    }

    public goAttack(target:Character){
        this.anims.play('run')
        const targetX = target.x + (target.width * target.scaleX)/2

        this.scene.physics.moveTo(this, targetX, target.y,100)
        console.log(target.body, this.body)
       this.enemyCollider = this.scene.physics.add.overlap(this, target.physicBody, this.stopMove.bind(this))

    }

    private stopMove(first, second){
        
        const firstX = first.x + (first.width * first.scaleX) / 2
        const firstY = first.y + (first.height * first.scaleY) /2

        const secondX = second.x - (second.width*second.scaleX)/2
        const secondY = second.y - (second.height * second.scaleY) / 2

        const distance  = Phaser.Math.Distance.Between(firstX, firstY, secondX, secondY)
        if(distance>90){
        first.body.velocity.x = 0
        first.body.velocity.y = 0
        this.anims.play('attack').on('animationrepeat', this.goBackPosition.bind(this))
        this.enemyCollider.destroy()
        }
    }

    private goBackPosition(){
        this.scene.physics.moveTo(this, this.startPosition.x, this.startPosition.y)
        this.play('run')
        this.flipX = true
    }
    move(){}

    
}