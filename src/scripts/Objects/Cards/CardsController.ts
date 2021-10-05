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

    private createCard(el,i = 0,isTween:boolean = true):Card{
        const cardPlace = this.cardPlace.cardPlaceObject
        const cpX = (cardPlace.width * cardPlace.scaleX / this.system.state.handCount) / 2
        const cpY = cardPlace.y + (cardPlace.height * cardPlace.scaleY)/2
        const card = new Card(this.scene, 0, cpY, 'cardTemplate',el).setOrigin(0,0.5)

        if(isTween){
            this.scene.tweens.add({
                targets:card,
                x:cpX *(i * 2) + (cpX/2),
                duration:500,
                ease: 'Expo',
               onComplete:(t:any) =>{ 
               this.cardCoords.push({x:t.targets[0].x, y: t.targets[0].y})
               console.log(this.cardCoords)}
            })
        }
        card.setInteractive()
        return card
    }

    public handCreater(hand){
        const cardPlace = this.cardPlace.cardPlaceObject
        const cpX = (cardPlace.width * cardPlace.scaleX / this.system.state.handCount) / 2
        const cpY = cardPlace.y + (cardPlace.height * cardPlace.scaleY)/2

        hand.forEach((el:any,i)=>{
           const card = this.createCard(el, i)
           this.cards.push(card)
        })
        
    }

    

    public handDelCard(id:number, drawCard:Card[]){
       const cardIndex = this.cards?.findIndex(el=>el.cardGameId === id)
       const delCard = this.cards[cardIndex]
      
       delCard.destroyCard()
       this.cards.splice(cardIndex, 1)
       const newCard = this.createCard(drawCard[0],cardIndex,false)

       this.cards.unshift(newCard)

        for(let i = 0; i<=cardIndex; i++){
            const card = this.cards[i]
            //this.cards[i] = this.cards[i+1]
            this.scene.tweens.add({
                targets:card,
                x:this.cardCoords[i].x,
                duration:1000,
                ease: 'Expo'
            })
        }
    }
    
    cardSync(){
        this.cards.forEach(el=>{
            el.syncElem()
        })
    }
}