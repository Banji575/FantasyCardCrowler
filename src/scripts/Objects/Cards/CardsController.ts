import { Card } from "./Card";
import { CardPlace } from "./CardPlace";

export interface CardsConfig {
    handCount:number
    deckCount:number
    throwCount:number
}
// должен принять массив карт и отрисовать их на cardPlace
export class CardController {
   cards:Card[];
    constructor(private scene:Phaser.Scene, private cardPlace:CardPlace){
        this.cards = []
    }

    public handCreater(hand:Card[]){
        const cardPlace = this.cardPlace.cardPlaceObject
        const cpWidth = cardPlace.width * cardPlace.scaleX
        const cpHeight = cardPlace.height * cardPlace.scaleY
        const cpX = cardPlace.x
        const cpY = cardPlace.y
        hand.forEach((el,i)=>{
            const x = 100
            const card = new Card(this.scene, x*i, cpY, 'cardTemplate')
           this.cards.push(card)
        })

    }

}