class Hunter extends Traveler {
    constructor(nome) {
        super(nome)
        this._qtdFood = 2
    }
    set qtdFood(value) {
        this._qtdFood = value
    }
    get qtdFood() {
        return this._qtdFood
    }
    set isHealthy(value) {
        this._isHealthy = value
    }
    get isHealthy() {
        return this._isHealthy
    }

    hunt() {
        this.qtdFood += 5
        return console.log(`Now the hunter ${this.nome} has ${this.qtdFood} of food`)
    }
    eat() {
        if (this.qtdFood > 1) {
            this.qtdFood -= 2
            this.isHealthy = true
           return console.log(`Now the hunter ${this.nome} has ${this.qtdFood} of food and is Healthy`)
        }
        if (this.qtdFood === 1) {
            this.qtdFood -= 1
            this.isHealthy = false
           return console.log(`The hunter ${this.nome} has no food enougth to eat and is Sick`)
        }
        if (this.qtdFood === 0) {
            this.isHealthy = false
           return console.log(`The hunter ${this.nome} has no food to eat and is Sick`)
        }
    }

    giveFood(traveler, numOfFoodUnits) {

        if(numOfFoodUnits > this.qtdFood) {
            return console.log(`The hunter ${this.nome} doesn't have ${numOfFoodUnits} of food to give `)
        }

        traveler.qtdFood += numOfFoodUnits
        this.qtdFood -= numOfFoodUnits

        
    }
}
