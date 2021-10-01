import { LevelConfig } from "./LevelCreator"

export const MainLevel: LevelConfig  = {
    key:'mainTownMap',
    tileSize: {
        tileWidth: 32,
        tileHeight: 32
    },
    tilesLayer: [
        {
            importImage:'mainGrassTileset',
            jsonLayerName:'TX Tileset Grass',
            mapLayerName:'grasses'
        },
        {
            importImage:'mainPlacesTileset',
            jsonLayerName:'TX Tileset Stone Ground',
            mapLayerName:'plases'
        },
        {
            importImage:'mainWallTileset',
            jsonLayerName:'TX Tileset Wall',
            mapLayerName:'walls'
        },
        {
            importImage:'mainItemsTileset',
            jsonLayerName:'TX Props',
            mapLayerName:'items'
        },
        {
            importImage:'mainTreeTileset',
            jsonLayerName:'TX Plant',
            mapLayerName:'trees'
        },
        {
            importImage:'mainStraisTileset',
            jsonLayerName:'TX Struct',
            mapLayerName:'strais'
        },
        
    ]
}