// const EntityBase = require('./EntityBase')

// console.log(new EntityBase({
//     name: 'Edmilson Ferreira',
//     gender: 'male'
// }).name)

// console.log(new EntityBase({
//     name: 'Marylin Monroe',
//     gender: 'female'
// }).#name)

const assert = require('assert')
const Util = require('../util')
const Employee = require('./employee')

const GENDER = {
    male: 'male',
    female: 'female'
}

{
    const employee = new Employee({
        name: 'Marylin Monroe',
        gender: GENDER.female
    })

    assert.throws(() => employee.birthYear, { message: 'You must define age first!' })
}

{
    const employee = new Employee({
        name: 'Edmilson Ferreira',
        age: 22,
        gender: GENDER.male
    })

    assert.deepStrictEqual(employee.name, "Mr. Edmilson Ferreira")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40))
}