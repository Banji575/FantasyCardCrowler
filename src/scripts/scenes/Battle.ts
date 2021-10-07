
import { Shader } from "../Effects/Shaders"
import CardManager from "../Objects/Cards/CardManager"
import { CardPlace } from "../Objects/Cards/CardPlace"
import { CardController } from "../Objects/Cards/CardsController"
import { Enemy } from "../Objects/Enemy"
import { EnemyFactory } from "../Objects/Enemy/EnemyFactory"
import { assasins } from "../Objects/Enemy/EnemysConfigs"
import MagicCast from "../Objects/Magic/MagicCast"
import { MagicController } from "../Objects/Magic/MagicController"

export class Battle extends Phaser.Scene{
    cardManager:CardManager
    cardController:CardController
    graphic:any
    currentCard
    enemy: Enemy
    enemy2:Enemy
    enemyFactory:EnemyFactory
    magicController: MagicController

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
        
        this.enemyFactory = new EnemyFactory(this)

        this.enemy = this.enemyFactory.createEnemy(150, 150, assasins)
        this.enemy2 = this.enemyFactory.createEnemy(500, 150, assasins)

        this.magicController = new MagicController(this)

        // const shader = new Shader(this)
        // shader.shade()
    }

    update(){
        this.cardController.cardSync()
    }

    createHand(){
        // const hand = this.cardManager.getHand()
        const card = this.cardManager.drawCard(5)
        this.cardController.handCreater(card)
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
        //взял карту из колоды и добавил ее в руку
        const drawCard = this.cardManager.drawCard(1)
        //console.log(drawCard)
        this.magicController.checkMagic(this.enemy, this.enemy2,this.currentCard.config)
        this.cardController.handDelCard(this.currentCard.cardGameId, drawCard)
    }


}