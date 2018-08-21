const globalData = {
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
const initialArrayContainer = document.getElementById("initial-array-container");
const resultContainer = document.getElementById("result-container");
const tabButtons = document.querySelectorAll("#tab-buttons-container>span");
const activeTabs = document.getElementsByClassName("active");
let activeTabId = document.querySelector("#tab-buttons-container .active").getAttribute("data-array-method");
let activeTabContent = document.querySelector("div[data-array-method=" + activeTabId + "]");
const executeButton = document.getElementsByClassName("execute-btn");

function changeTab(tab) {
    globalData.selectedMethod = tab;
}

const arrayMethods = {
  push: function() {
    const pushName = document.getElementById("push-name").value;
    const pushAge = document.getElementById("push-age").value;
    globalData.resultArray.push({name: pushName, age: pushAge});
    displayCharacters(globalData.resultArray, resultContainer);
  },


  pop: function() {
    globalData.resultArray.pop();
    displayCharacters(globalData.resultArray, resultContainer);
  },


  filter: function() {
    const filterName = document.getElementById("filter-name").value;
    const filteredData = globalData.resultArray.filter(function(character) {
      if (character.name.includes(filterName)) {
        return character
      }
    });
    displayCharacters(filteredData, resultContainer);
  },


  find: function() { // Не работает !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const findAge = Number(document.getElementById("find-age").value);
    console.log(findAge);
    const findData = globalData.initialArray.find(function( currentValue ) {
      if (currentValue.age === findAge) {
        console.log(currentValue);
        return currentValue;
      }
    });

    globalData.resultArray = findData !== undefined ? [findData] : [];
    displayCharacters(globalData.resultArray, resultContainer);
  },


  sort: function() {
    const sortField = document.getElementById("sort-field").value;
    if (sortField === "Age") {
      globalData.resultArray.sort(function (a, b) {
        if (a.age > b.age) return 1;
        if (a.age < b.age) return -1;
      });
    } else if (sortField === "Name") {
        globalData.resultArray.sort(function (a, b) {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
        });
    }
    displayCharacters(globalData.resultArray, resultContainer);
  },


  map: function() {
    const mapAge = Number(document.getElementById("map-age").value);
    globalData.resultArray = globalData.initialArray.map(function(character) {
      return {
        name: character.name,
        age: character.age + mapAge
      };
    });
    displayCharacters(globalData.resultArray, resultContainer);
  },


  reduce: function() {
    const reduceName = document.getElementById("reduce-name").value;
    const filteredData = globalData.resultArray.filter(function(character) {
      if (character.name.includes(reduceName)) {
        return character
      }
    });

    const sumAge = filteredData.reduce(function(sum, character) {
      return sum + character.age;
    }, 0);

    const averageAge = sumAge / filteredData.length;
    displayCharacters(averageAge, resultContainer);
  },


  indexOf: function() {
    const namesArr = globalData.resultArray.map(function(character) {
      return character.name;
    });

    const indexOfInputName = document.getElementById("index-of-name").value;
    const index = namesArr.indexOf(indexOfInputName);
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
    const agesArr = globalData.resultArray.map(function(character) {
      return character.age;
    });

    const indexOfInputAge = Number(document.getElementById("lastIndexOf-age").value);
    const index = agesArr.lastIndexOf(indexOfInputAge);
    displayCharacters(index, resultContainer);
  },


  concat: function() {
    const concatJson = document.getElementById("concat-json").value;
    const concatData = JSON.parse(concatJson);
    const concatResult = globalData.resultArray.concat(concatData);
    displayCharacters(concatResult, resultContainer);
  },


  join: function() {
    const namesArr = globalData.resultArray.map(function(character) {
      return character.name;
    });

    const joinDelimiter = document.getElementById("join-delimiter").value;
    const joinResult = namesArr.join(joinDelimiter);
    displayCharacters(joinResult, resultContainer);
  },


  shift: function() {
    globalData.resultArray.shift();
    displayCharacters(globalData.resultArray, resultContainer);
  },


  unshift: function() {
    const unshiftName = document.getElementById("unshift-name").value;
    const unshiftAge = document.getElementById("unshift-age").value;
    globalData.resultArray.unshift({name: unshiftName, age: unshiftAge});
    displayCharacters(globalData.resultArray, resultContainer);
  },


  slice: function() {
    const sliceStartIndex = Number(document.getElementById("slice-start-index").value);
    const sliceUpToIndex = Number(document.getElementById("slice-up-to-index").value);
    const sliceResult = globalData.resultArray.slice(sliceStartIndex, sliceUpToIndex);
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
    const everyAge = document.getElementById("every-age").value;
    const everyResult = globalData.resultArray.every(function(character) {
      return character.age >= everyAge;
    });
    displayCharacters(everyResult, resultContainer);
  },


  some: function() {
    const someName = document.getElementById("some-name").value;
    const someResult = globalData.resultArray.some(function(character) {
      return character.name.includes(someName);
    });
    displayCharacters(someResult, resultContainer);
  },


  reduceRight: function() {
    const reduceRightAge = Number(document.getElementById("reduce-right-age").value);
    const filteredData = globalData.resultArray.filter(function(character) {
      if (character.age <= reduceRightAge) {
        return character
      }
    });

    let maxAge = 0;
    filteredData.reduceRight(function(previousValue, currentValue, index){
      if (currentValue.age > maxAge) {
        maxAge = currentValue.age;
      }
    });

    displayCharacters(maxAge, resultContainer);
  },


  findIndex: function() {
    const findIndexName = document.getElementById("find-index-name").value;
    const index = globalData.resultArray.findIndex(function(character) {
      return character.name.includes(findIndexName);
    });
    displayCharacters(index, resultContainer);
  }
};
