import { CardLibr } from "../../Systems/cardLibr";
import { System } from "../../Systems/System";
import { Card } from "./Card";

//создает колоду []

export default class CardManager{
    system:System
    cardLibr:CardLibr
    deck:Array<Card>
    constructor(){
        this.system = System.getInstance()
        this.cardLibr = CardLibr.getInstance()
        this.deck = []
        this.createDeck()
    }

    private createDeck(){
        const deckCount = this.system.state.deckCount
        const librLength = CardLibr.getInstance().getLibrLength()
        const libr = CardLibr.getInstance().getCardLibr()

        for (let i = 0; i < deckCount; i++) {
            const index = Math.floor(Math.random()*(librLength -1))
            this.deck.push(libr[index])
        }
    }

    public getDeck(){
        return this.deck
    }

    public getHand(){
        const handCardCount = this.system.state.handCount
        const hand = new Array(handCardCount).fill('')

       .map((el,i)=>{
            const elem = this.deck[0]
            this.deck.shift()
            return elem
        })
        return hand
    }

    private getCard(){

    }

    private randomizeCard(){

    }
}