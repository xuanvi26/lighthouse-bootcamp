
function indexOf(array, num) {
    return array.indexOf(num);
}

var assert = require('assert');
describe('Array', function() {
    describe('indexOf() written by xuanvi', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(indexOf([1,2,3], 4), -1);
            assert.equal(indexOf([1,5,6], 'string'), -1);
            assert.equal(indexOf([1,2,3]), -1);
        });
        it('should return the index of elem if presnet', function() {
            assert.equal(indexOf([1,2,3], 3), 2);
        })
    })
})


