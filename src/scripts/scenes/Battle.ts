import { Card } from "../Objects/Cards/Card"
import CardManager from "../Objects/Cards/CardManager"
import { CardPlace } from "../Objects/Cards/CardPlace"
import { CardController } from "../Objects/Cards/CardsController"
import { CardLibr } from "../Systems/cardLibr"
import { System } from "../Systems/System"

export class Battle extends Phaser.Scene{
    cardManager:CardManager
    cardController:CardController
    constructor(){
        super('battle')
    }
    create(){
        const cardPlace = new CardPlace(this)
        this.cardController = new CardController(this, cardPlace)
        this.cardManager = new CardManager()
        
        this.createHand()
    }

    createHand(){
        const hand = this.cardManager.getHand()
        this.cardController.handCreater(hand)
    }
}