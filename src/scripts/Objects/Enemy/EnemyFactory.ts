import { Enemy } from "../Enemy";

export interface EnemyConfig{
    texture:string,
    frame:number,
    animation: EnemyAnimation
}

export interface EnemyAnimation{
    idle:string|null,
    attack:string|null,
    run:string|null,
    walk:string|null,
    diy:string|null,
}

export class EnemyFactory{
    constructor(private scene:Phaser.Scene){

    }

    createEnemy(x:number, y:number,ec:EnemyConfig){
        return new Enemy(this.scene, x, y, ec.texture, ec.frame, ec.animation)
    }
}