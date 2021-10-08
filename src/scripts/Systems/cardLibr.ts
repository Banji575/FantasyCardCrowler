export interface ICard {
    id:number,
    name:string,
    type:string,
    props:CardProps
}

export interface CardProps {
    power:number,
    armor:number,
    damage:number

}

export class CardLibr{
    private static instance: CardLibr

    private constructor(){}

    public static getInstance():CardLibr{
        if(!CardLibr.instance){
            this.instance = new CardLibr()
        }
        return this.instance
    }

    public getCardLibr(){
       return CardLibr.instance.cardLibr()
    }

    public getLibrLength(){
        const libr = this.getCardLibr()
        return Object.keys(libr).length
    
    }

    

    private cardLibr(){
        return {
            0:{
                id:1,
                name:'Medium Armor',
                type:'defence',
                props:{
                    power:0,
                    armor:2,
                    damage:0
                }
            },
            1:{
                id:2,
                name:'Medium Attack',
                type:'attack',
                props:{
                    power:0,
                    armor:0,
                    damage:2
                }
            },
            2:{
                id:2,
                name:'Medium Fireball',
                type:'magick',
                props:{
                    power:-1,
                    armor:0,
                    damage:2
                }
            }
        }
    }

    
}