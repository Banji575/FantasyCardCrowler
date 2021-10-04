import { System } from "../../Systems/System";
import { Card } from "./Card";
import { CardPlace } from "./CardPlace";

export interface CardsConfig {
    handCount:number
    deckCount:number
    throwCount:number
}

interface cardCoord{
    x:number,
    y:number
}
// должен принять массив карт и отрисовать их на cardPlace
export class CardController {
   cards:Card[];
   system:System
   cardCoords:cardCoord[]

    constructor(private scene:Phaser.Scene, private cardPlace:CardPlace){
        this.cards = []
        this.system = System.getInstance()
        this.cardCoords = []
    }

    public handCreater(hand){
        const cardPlace = this.cardPlace.cardPlaceObject
        const cpX = (cardPlace.width * cardPlace.scaleX / this.system.state.handCount) / 2
        const cpY = cardPlace.y + (cardPlace.height * cardPlace.scaleY)/2

        hand.forEach((el:any,i)=>{
            const card = new Card(this.scene, 0, cpY, 'cardTemplate').setOrigin(0,0.5)
            this.scene.tweens.add({
                targets:card,
                x:cpX *(i * 2) + (cpX/2),
                duration:500,
                ease: 'Expo',
                callback:(card)=>this.cardCoords.push(card)
            })
            //card.x = cpX *(i * 2) + (cpX/2)
            card.cardGameId = el.cardGameId
            card.cardLibrId = el.id
            card.setInteractive()
            this.cards.push(card)
           // this.cardCoords.push({x:card.x, y:card.y})
            console.log(card)
        })
       
    }

    public handDelCard(id:number){
        console.log(id)

       const cardIndex = this.cards?.findIndex(el=>el.cardGameId === id)
       const delCard = this.cards[cardIndex]
       delCard.destroy()
       
        for(let i = 0; i<cardIndex; i++){
            
            const card = this.cards[i]
            this.cards[i] = this.cards[i+1]
            this.scene.tweens.add({
                targets:card,
                x:this.cardCoords[i+1].x,
                duration:500,
                ease: 'Expo'
            })
        }


      // console.log(this.cards)
    }

}