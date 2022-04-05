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
const Util = require('./util')
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

const CURRENT_YEAR = 2022
Date.prototype.getFullYear = () => CURRENT_YEAR

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
    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32))
    
    const expectedBirthYear = 2000
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear)

    employee.birthYear = new Date().getFullYear() - 80
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear)

    employee.age = 80
    assert.deepStrictEqual(employee.birthYear, 1942)

    console.log('\n ---employee---')
    console.log('employee.name', employee.name)
    console.log('employee.age', employee.age)
    console.log('employee.gender', employee.gender)
    console.log('employee.grossPay', employee.grossPay)
    console.log('employee.netPay', employee.netPay)
}