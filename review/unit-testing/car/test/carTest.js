var chai = require('chai');
var assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js')

// The car must have fuel efficiency between 6 and 11 litres/100km
// The car must cost $5,000 or less
// If the car's color is pink, then he will buy it no matter what the price or litres/100km.
// never buy hatchback
describe('shouldBuyCar', function() {
    it('should return false if the car is a hatchback', function() {
        let car = {
            type: 'hatchback'
        };
        assert.equal(shouldBuyCar(car), false);
    })
})