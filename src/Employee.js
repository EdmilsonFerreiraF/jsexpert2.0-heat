const EntityBase = require("./EntityBase");

class Employee extends EntityBase {
    static #TAXES_PERCENTUAL = 0.2
    #grossPay = 5000.40
}

module.exports = Employee;