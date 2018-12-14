
// function indexOf(array, num) {
//     return array.indexOf(num);
// }

// var assert = require('assert');
// describe('Array', function() {
//     describe('indexOf() written by xuanvi', function() {
//         it('should return -1 when the value is not present', function() {
//             assert.equal(indexOf([1,2,3], 4), -1);
//             assert.equal(indexOf([1,5,6], 'string'), -1);
//             assert.equal(indexOf([1,2,3]), -1);
//         });
//         it('should return the index of elem if presnet', function() {
//             assert.equal(indexOf([1,2,3], 3), 2);
//         })
//     })
// })



function ascending(A) {
    for (let i = 0; i < A.length -1; i++) {
        if (!(A[i] <= A[i+1])) {
           return false; 
        }
    } 
    return true;
}

function descending(A) {
    for (let i = 0; i < A.length -1; i++) {
        if (!(A[i] >= A[i+1])) return false;
    }
    return true;
}

var isMonotonic = function(A) {
    return ascending(A) || descending(A);
};


var assert = require('assert');
describe('Leetcode challenge: monotonic array', function() {
    it('should return true when array is monotonically ascnending', function() {
        assert.equal(isMonotonic([1,4,6]), true);
        assert.equal(isMonotonic([1,1,1,1]), true);
        assert.equal(isMonotonic([1,1,4,5]), true);
    });
    it('should return true when array is monotonically descending', function() {
        assert.equal(isMonotonic([6,5,2]), true);
        assert.equal(isMonotonic([1,1,1,1]), true);
        assert.equal(isMonotonic([6,5,4,4]), true);
    });
    it('should return false otherwise', function() {
        assert.equal(isMonotonic([6,5,6]), false);
        assert.equal(isMonotonic([1,1,0,0,2,2]), false);
    })
})