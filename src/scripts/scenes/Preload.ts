import Phaser from "phaser";

export class Preload extends Phaser.Scene{
    constructor(){
        super('preload')
    }
    preload(){
        this.load.image('tileMap1','assets/maps/pixel_platform_01_tileset_final.png')
        this.load.tilemapTiledJSON('level1','assets/maps/maps.json')
        this.load.spritesheet('playerIdle', 'assets/player/Idle2.png',{frameWidth:135, frameHeight:135})
        this.load.spritesheet('playerRun', 'assets/player/Run.png',{frameWidth:135, frameHeight:135})


        this.load.tilemapTiledJSON('mainTownMap', 'assets/maps/topDownMap/mainTown2.json')
        this.load.image('mainWallTileset', 'assets/maps/topDownMap/TX Tileset Wall.png')
        this.load.image('mainGrassTileset', 'assets/maps/topDownMap/TX Tileset Grass.png')
        this.load.image('mainPlacesTileset', 'assets/maps/topDownMap/TX Tileset Stone Ground.png')
        this.load.image('mainItemsTileset', 'assets/maps/topDownMap/TX Props.png')
        this.load.image('mainTreeTileset','assets/maps/topDownMap/TX Plant.png' )
        this.load.image('mainStraisTileset','assets/maps/topDownMap/TX Struct.png')

        //interface element
        this.load.image('cardPlace', 'assets/img/inteface/cardPlace.png')


        //card
        this.load.image('cardTemplate', 'assets/img/Elements/cardTemplate.png')

        //cardImage
        this.load.image('MediumAttack', 'assets/img/cardArt/mediumAttack.jpg')
        this.load.image('MediumArmor', 'assets/img/cardArt/mediumArmor.jpg')
        this.load.image('MediumFireball', 'assets/img/cardArt/mediumFireball.jpg')

        //enemy
        this.load.spritesheet('assasinIdle', 'assets/BattleImg/Enemyes/assasin/Idle.png',{frameWidth:150, frameHeight:128})

        //magic
        this.load.spritesheet('Medium Fireball_magic', 'assets/img/magic/FireBall_3_64x64.png', {frameWidth:64, frameHeight:64})

    }

    create(){
        this.scene.start('main')
    }


    initSystemClass(){
        
    }
}