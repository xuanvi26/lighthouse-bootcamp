var chai = require('chai');
var assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js')

describe('shouldBuyCar', function() {
    context('when given an invalid car object', function () {
        it('should throw an error when there is no car', function() {
            assert.throws(shouldBuyCar, Error);
        });
        it('should throw an error when the car type is kutrinh', function() {
            let car = {
                type: 'kutrinh'
            }
            try {
                shouldBuyCar(car);
                assert.isTrue(false);
            } catch (e) {
                assert.isTrue(true);
            };
        });
        it('should return false when there are no details about the car', function() {
            let car = {}
            assert.equal(shouldBuyCar(car), false);
        });
    });

    context('when given a proper car object', function () {
        it('should return true when the car is pink', function() {
            let car = {
                color: 'pink'
            }
            assert.equal(shouldBuyCar(car), true);
        });
        it('should return false if the car is a hatchback', function() {
            let car = {
                type: 'hatchback'
            };
            assert.equal(shouldBuyCar(car), false);
        });
        it('should return false when the car is a hatchback and pink', function() {
            let car = {
                color: 'pink',
                type: 'hatchback'
            }
            assert.equal(shouldBuyCar(car), false);
        });
        it('should return true when the car has 6 litres/100km and is under or equal to $5,000', function() {
            let car = {
                litresPer100km: 6,
                price: 5000,
            }
            assert.equal(shouldBuyCar(car), true);
        });
        it('should return false when the car has 5 litres/100km and is under or equal to $5,000', function() {
            let car = {
                litresPer100km: 5,
                price: 5000,
            }
            assert.equal(shouldBuyCar(car), false);
        });
        it('should tell you how good of a deal the car is on a scale from 1 to 10')
    })
})