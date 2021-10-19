class Doctor extends Traveler {
    constructor(nome) {
        super(nome)
    }

    heal(traveler) {
        traveler.isHealthy = true
    }

}