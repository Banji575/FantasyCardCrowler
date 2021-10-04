import { Card } from "../Objects/Cards/Card"
import CardManager from "../Objects/Cards/CardManager"
import { CardPlace } from "../Objects/Cards/CardPlace"
import { CardController } from "../Objects/Cards/CardsController"
import { CardLibr } from "../Systems/cardLibr"
import { System } from "../Systems/System"

export class Battle extends Phaser.Scene{
    cardManager:CardManager
    cardController:CardController
    graphic:any
    currentCard
    constructor(){
        super('battle')

    }
    create(){
        this.graphic = this.add.graphics().setDepth(10)
        const cardPlace = new CardPlace(this)
        this.cardController = new CardController(this, cardPlace)
        this.cardManager = new CardManager()
        
        this.createHand()

        this.input.on('gameobjectdown', this.onClickObject.bind(this))
        


    }

    createHand(){
        const hand = this.cardManager.getHand()
        this.cardController.handCreater(hand)
    }

    onClickObject(pointer, gameObject){
        if(gameObject.cardLibrId){
            this.input.on('pointermove',()=>this.cardAiming(pointer,gameObject))
            this.input.on('pointerup', this.resetHandler.bind(this))
            this.currentCard = gameObject
        }
        //gameObject.destroy()
    }

    cardAiming(pointer, gameObject){
        this.graphic.clear()
        const line = new Phaser.Geom.Line(gameObject.x + (gameObject.width * gameObject.scaleX)/2, gameObject.y, pointer.x, pointer.y)
        
        this.graphic.lineStyle(2, 0x00ff00)
        this.graphic.strokeLineShape(line)
        
    }

    resetHandler(){
        this.input.off('pointermove')
        this.input.off('pointerup')
        this.graphic.clear()
        this.cardController.handDelCard(this.currentCard.cardGameId)
    }
}