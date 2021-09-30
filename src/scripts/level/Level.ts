export default class Level{
    scene:Phaser.Scene
    platform
    map

    constructor(scene : Phaser.Scene){
        this.scene = scene   
        this.createMap()
    }

    createMap(){
        const map = this.scene.make.tilemap({key:'level1', tileWidth: 64, tileHeight: 64  })
        const tileset = map.addTilesetImage('pixel_platform_01_tileset_final', 'tileMap1')

        this.platform = map.createLayer('ground',tileset, 50,50)
       
        this.scene.physics.world.setBounds(0,0,map.widthInPixels, map.heightInPixels)
        this.platform.setCollisionByExclusion([-1], true)
        this.map = map
    }
}