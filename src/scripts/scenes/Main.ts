import { InputSystem } from "../Systems/Input"
import {Level} from "../level/LevelCreator"
import { MainLevel } from "../level/levels"
import Character from "../Objects/Character"
import Player from "../Objects/Player"

export default class Main extends Phaser.Scene{
    player
    inputController: InputSystem
    cursor: Phaser.Types.Input.Keyboard.CursorKeys
    constructor(){
        super('main')
        
    }
    create(){
        const {width, height}= this.game.config
        const level = new Level(this)
        level.createMap(MainLevel)

        this.player = new Player(this, 350 ,150,'playerIdle',1)
        this.inputController = new InputSystem(this, this.player)
        this.cursor = this.input.keyboard.createCursorKeys()

        this.scene.start('battle')
    }

    update(){
     this.inputController.keyboardController()
    }
}