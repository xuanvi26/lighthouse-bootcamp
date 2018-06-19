let list = [];

const compareNumbers = (a,b) => {
    return a - b;
} 
  
const sort = (arr) => {
    return arr.sort(compareNumbers);
}

module.exports = {
    storeList: function(num) {
        list.push(num);
    },
    sortList: function() {
        return sort(list);
    }
  };

