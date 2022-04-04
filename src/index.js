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