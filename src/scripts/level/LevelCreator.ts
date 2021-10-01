export interface LevelConfig {
    key:string
    tileSize:{tileWidth:number, tileHeight:number}
    tilesLayer: TileLayer[]

}
export interface TileLayer {
    importImage:string,
    jsonLayerName:string,
    mapLayerName:string
}

export class Level{
    scene:Phaser.Scene
    constructor(scene : Phaser.Scene){
        this.scene = scene   
    }

    createMap({key, tileSize, tilesLayer}:LevelConfig){
        const {tileWidth, tileHeight} = tileSize
        const map = this.scene.make.tilemap({key, tileWidth, tileHeight})
        tilesLayer.forEach((el:TileLayer)=>{
            const tileset = map.addTilesetImage(el.jsonLayerName, el.importImage)
            const layer = map.createLayer(el.mapLayerName, tileset, 0,0)
        })
    }
}