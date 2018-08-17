var characters = [
  {
  name: "John Snow",
  age: 18
  },

  {
  name: "Daenerys Targarien",
  age: 18
  },

  {
  name: "Brandon Stark",
  age: 10
  },

  {
  name: "Tyrion Lannister",
  age: 35
  },

  {
  name: "Aemon Targaryen",
  age: 102
  },

  {
  name: "Missandey",
  age: 16
  },

  {
  name: "Marghery Tyrell",
  age: 17
  },

  {
  name: "Cersei Lannister",
  age: 38
  },

  {
  name: "Hodor",
  age: 42
  },

  {
  name: "Khal Drogo",
  age: 27
  }
];


// Main variables
var resultArray = characters.slice();
var initialArrayContainer = document.getElementById("initial-array-container");
var resultContainer = document.getElementById("result");
var tabButtons = document.querySelectorAll("#tab-buttons-container>div");
var activeTabs = document.getElementsByClassName("active");
var activeTabId = document.querySelector("#tab-buttons-container .active").getAttribute("href");

// Tabs
for (i = 0; i < tabButtons.length; i++) {
  let tabId = tabButtons[i].getAttribute("href");
  document.querySelector(tabId).style.display = "none";
}
document.querySelector(activeTabId).style.display = "block";

// Tabs - addind class "active"
for (var i=0; i < tabButtons.length; i++) {
  addClassActive(tabButtons[i]);
};

function addClassActive(selectedTab) {
  selectedTab.addEventListener("click", function (e) {

  	if (activeTabs.length >=1) {
  		for (var j=0; j < activeTabs.length; j++) {
  			activeTabs[j].classList.remove("active");
  		}
  }

    selectedTab.classList.add("active");
    document.querySelector(activeTabId).style.display = "none";
    activeTabId = selectedTab.getAttribute("href");
    document.querySelector(activeTabId).style.display = "block";

    // Clear previous results - Doesn't work
    resultArray.length = 0;
    displayCharacters(resultArray, resultContainer);
  });
}

// Draw array's data
function displayCharacters(array, container) {
  for (i = 0; i < array.length; i++) {

    var characterCard = document.createElement("div");
    container.appendChild(characterCard);
    characterCard.classList.add("character-card");

    var characterName = document.createElement("p");
    characterCard.appendChild(characterName);
    characterName.innerHTML = array[i].name;

    var characterAge = document.createElement("p");
    characterCard.appendChild(characterAge);
    characterAge.innerHTML = "Age: " + array[i].age;

  }
}

displayCharacters(characters, initialArrayContainer);

// Push Method
var pushButton = document.querySelector("#tab-push button");
pushButton.addEventListener("click", function (e) {

  var inputName = document.getElementById("push-name").value;
  var inputAge = document.getElementById("push-age").value;
  resultArray.push({name: inputName, age: inputAge});

  displayCharacters(resultArray, resultContainer);

});
