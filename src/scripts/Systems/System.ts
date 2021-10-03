import { CardsConfig } from "../Objects/Cards/CardsController"


const initialState:CardsConfig = {
    handCount: 5,
    deckCount: 60,
    throwCount: 0
}

export class System {
    private static instacne : System
    public width
    public height
    public scale:number
    public aspect
    private defaultWidth = 1580
    //private defaultHeight = 980

    state:CardsConfig

    private constructor(){
        this.init()
        this.state = initialState
        
    }

    public static getInstance():System{
        if(!System.instacne){
            this.instacne = new System()
        }
        return this.instacne
    }
    init(){
        this.width = document.body.clientWidth
        this.height = document.body.clientHeight
        this.scale = this.width/this.defaultWidth
        this.aspect = this.height/this.width
    }

    
    
}