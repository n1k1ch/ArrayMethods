var globalData = {
  initialArray: [{name: "John Snow", age: 18},
                    {name: "Daenerys Targarien", age: 10},
                    {name: "Brandon Stark", age: 35},
                    {name: "Tyrion Lannister", age: 102},
                    {name: "Aemon Targarien", age: 18},
                    {name: "Missandey", age: 16},
                    {name: "Marghery Tyrell", age: 17},
                    {name: "Cersei Lannister", age:38},
                    {name: "Hodor", age: 42},
                    {name: "Khal Drogo", age: 27}],
  selectedMethod: "push",
  resultArray: [],
  resultValue: ""
};

// Main variables
globalData.resultArray = globalData.initialArray.slice();
var initialArrayContainer = document.getElementById("initial-array-container");
var resultContainer = document.getElementById("result-container");
var tabButtons = document.querySelectorAll("#tab-buttons-container>span");
var activeTabs = document.getElementsByClassName("active");
var activeTabId = document.querySelector("#tab-buttons-container .active").getAttribute("data-array-method");
var activeTabContent = document.querySelector("div[data-array-method=" + activeTabId + "]");
var executeButton = document.getElementsByClassName("execute-btn");

function changeTab(tab) {
    globalData.selectedMethod = tab;
}

const arrayMethods = {
  push: function() {
    var pushName = document.getElementById("push-name").value;
    var pushAge = document.getElementById("push-age").value;
    globalData.resultArray.push({name: pushName, age: pushAge});
    displayCharacters(globalData.resultArray, resultContainer);
  },


  pop: function() {
    globalData.resultArray.pop();
    displayCharacters(globalData.resultArray, resultContainer);
  },


  filter: function() {
    var filterName = document.getElementById("filter-name").value;
    var filteredData = globalData.resultArray.filter(function(character) {
      if (character.name.includes(filterName)) {
        return character
      }
    });
    displayCharacters(filteredData, resultContainer);
  },


  find: function() { // Не работает !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var findAge = Number(document.getElementById("find-age").value);
    console.log(findAge);
    var findData = globalData.resultArray.find(function( currentValue ) {
      if (currentValue.age == findAge) {
        console.log(currentValue);
        return currentValue;
      }
    });
    displayCharacters(findData, resultContainer);
  },


  sort: function() {
    var sortField = document.getElementById("sort-field").value;
    if (sortField == "Age") {
      globalData.resultArray.sort(function (a, b) {
        if (a.age > b.age) return 1;
        if (a.age < b.age) return -1;
      });
    } else if (sortField == "Name") {
        globalData.resultArray.sort(function (a, b) {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
        });
    }
    displayCharacters(globalData.resultArray, resultContainer);
  },


  map: function() {
    var mapAge = Number(document.getElementById("map-age").value);
    globalData.resultArray.map(function(character) {
      character.age += mapAge;
      return character;
    });
    displayCharacters(globalData.resultArray, resultContainer);
  },


  reduce: function() {
    var reduceName = document.getElementById("reduce-name").value;
    var filteredData = globalData.resultArray.filter(function(character) {
      if (character.name.includes(reduceName)) {
        return character
      }
    });

    var sumAge = filteredData.reduce(function(sum, character) {
      return sum + character.age;
    }, 0);

    var averageAge = sumAge / filteredData.length;
    displayCharacters(averageAge, resultContainer);
  },


  indexOf: function() {
    var namesArr = globalData.resultArray.map(function(character) {
      return character.name;
    });

    var indexOfInputName = document.getElementById("index-of-name").value;
    var index = namesArr.indexOf(indexOfInputName);
    displayCharacters(index, resultContainer);
  },


  splice: function() {
    let spliceIndex = Number(document.getElementById("splice-index").value);
    let spliceDeleteCount = Number(document.getElementById("splice-delete-count").value);
    let spliceName = document.getElementById("splice-name").value;
    let spliceAge = Number(document.getElementById("splice-age").value);
    let addElement = {name: spliceName, age: spliceAge};

    globalData.resultArray.splice(spliceIndex, spliceDeleteCount, addElement);
    displayCharacters(globalData.resultArray, resultContainer);
  },


  lastIndexOf: function() {
    var agesArr = globalData.resultArray.map(function(character) {
      return character.age;
    });

    var indexOfInputAge = Number(document.getElementById("lastIndexOf-age").value);
    var index = agesArr.lastIndexOf(indexOfInputAge);
    displayCharacters(index, resultContainer);
  },


  concat: function() {
    var concatJson = document.getElementById("concat-json").value;
    var concatData = JSON.parse(concatJson);
    var concatResult = globalData.resultArray.concat(concatData);
    displayCharacters(concatResult, resultContainer);
  },


  join: function() {
    var namesArr = globalData.resultArray.map(function(character) {
      return character.name;
    });

    var joinDelimiter = document.getElementById("join-delimiter").value;
    var joinResult = namesArr.join(joinDelimiter);
    displayCharacters(joinResult, resultContainer);
  },


  shift: function() {
    globalData.resultArray.shift();
    displayCharacters(globalData.resultArray, resultContainer);
  },


  unshift: function() {
    var unshiftName = document.getElementById("unshift-name").value;
    var unshiftAge = document.getElementById("unshift-age").value;
    globalData.resultArray.unshift({name: unshiftName, age: unshiftAge});
    displayCharacters(globalData.resultArray, resultContainer);
  },


  slice: function() {
    var sliceStartIndex = Number(document.getElementById("slice-start-index").value);
    var sliceUpToIndex = Number(document.getElementById("slice-up-to-index").value);
    var sliceResult = globalData.resultArray.slice(sliceStartIndex, sliceUpToIndex);
    displayCharacters(sliceResult, resultContainer);
  },


  reverse: function() {
    globalData.resultArray.reverse();
    displayCharacters(globalData.resultArray, resultContainer);
  },


  forEach: function() {
    globalData.resultArray.forEach(function(item) {
      console.log('%c', 'background-color:#000000;color:yellow', item);
    });
  },


  every: function() {
    var everyAge = document.getElementById("every-age").value;
    var everyResult = globalData.resultArray.every(function(character) {
      return character.age >= everyAge;
    })
    displayCharacters(everyResult, resultContainer);
  },


  some: function() {
    var someName = document.getElementById("some-name").value;
    var someResult = globalData.resultArray.some(function(character) {
      return character.name.includes(someName);
    })
    displayCharacters(someResult, resultContainer);
  },


  reduceRight: function() {
    var reduceRightAge = Number(document.getElementById("reduce-right-age").value);
    var filteredData = globalData.resultArray.filter(function(character) {
      if (character.age <= reduceRightAge) {
        return character
      }
    });

    var maxAge = 0;
    filteredData.reduceRight(function(previousValue, currentValue, index){
      if (currentValue.age > maxAge) {
        maxAge = currentValue.age;
      }
    });

    displayCharacters(maxAge, resultContainer);
  },


  findIndex: function() {
    var findIndexName = document.getElementById("find-index-name").value;
    var index = globalData.resultArray.findIndex(function(character) {
      return character.name.includes(findIndexName);
    });
    displayCharacters(index, resultContainer);
  }
}
