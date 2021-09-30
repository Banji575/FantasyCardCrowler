import Phaser from "phaser";

export class Preload extends Phaser.Scene{
    constructor(){
        super('preload')
    }
    preload(){
        this.load.image('tileMap1','assets/maps/pixel_platform_01_tileset_final.png')
        this.load.tilemapTiledJSON('level1','assets/maps/maps.json')
        this.load.spritesheet('playerIdle', 'assets/player/Idle2.png',{frameWidth:135, frameHeight:135})

    }

    create(){
        this.scene.start('main')
    }
}