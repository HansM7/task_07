import axios from "axios"

export default class Api{

    constructor(url){
        this.url="https://api.chucknorris.io/jokes/random"
    }

    async getChistes(){
        const chiste = await axios.get(this.url)
        return chiste
    }

}