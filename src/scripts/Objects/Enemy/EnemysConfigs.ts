import { EnemyConfig } from "./EnemyFactory";

export const assasins:EnemyConfig = {
    texture: "assasinIdle",
    frame: 0,
    animation: {
        idle:'assasinIdle',
        attack:null,
        run:null,
        walk:null,
        diy:null,
    },
    params:{
        power:5,
        armor:3,
        magicPower:3,
        magicArmor:6,
        live:8
    }
}