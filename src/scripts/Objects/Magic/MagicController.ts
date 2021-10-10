import { Enemy } from "../Enemy";
import MagicCast from "./MagicCast";

export class MagicController {
    magicCast:MagicCast
    constructor(private scene:Phaser.Scene){
     this.magicCast = new MagicCast(this.scene)
    }
    checkMagic(targetStart:Enemy, targetEnd:Enemy, cardConfig:any){
        console.log(cardConfig)
        switch (cardConfig.type) {
            case 'magick':
                this.magicCast.cast(targetStart, targetEnd, cardConfig.name, this.endMagicCallback)
                break
            case 'attack':
                targetStart.goAttack(targetEnd)
        }
    }

    private endMagicCallback(){
        console.log('magicEnd')
    }
}