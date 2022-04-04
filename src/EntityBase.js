class EntityBase {
    #name
    #age
    #gender
    
    constructor({ name, age, gender }) {
        this.#name = name
        this.#age = age
        this.#gender = gender
    }
}

module.exports = EntityBase