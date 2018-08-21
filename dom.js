function deleteAllChildren(node){
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

// Draw array's data
function displayCharacters(dataForDisplay, container) {
  deleteAllChildren(container);
  if (typeof dataForDisplay == "object") {
    for (i = 0; i < dataForDisplay.length; i++) {
      var characterCard = document.createElement("div");
      container.appendChild(characterCard);
      characterCard.classList.add("character-card");

      var characterName = document.createElement("p");
      characterCard.appendChild(characterName);
      characterName.innerHTML = dataForDisplay[i].name;

      var characterAge = document.createElement("p");
      characterCard.appendChild(characterAge);
      characterAge.innerHTML = "Age: " + dataForDisplay[i].age;
    }
  } else {
    var resultValue = document.createElement("p");
    container.appendChild(resultValue);
    resultValue.innerHTML = dataForDisplay;
  }
}

document.addEventListener("DOMContentLoaded", displayCharacters(globalData.initialArray, initialArrayContainer));

// Tabs
for (i = 0; i < tabButtons.length; i++) {
  let tabId = tabButtons[i].getAttribute("data-array-method");
  let tabContent = document.querySelector("div[data-array-method=" + tabId + "]");
  tabContent.style.display = "none";
}
activeTabContent.style.display = "flex";

// Tabs - addind class "active"
for (var i=0; i < tabButtons.length; i++) {
  addClassActive(tabButtons[i]);
};

function addClassActive(selectedTab) {
  selectedTab.addEventListener("click", function (e) {

    const clickedMethod = selectedTab.getAttribute("data-array-method");
    changeTab(clickedMethod);

    deleteAllChildren(resultContainer);
    globalData.resultArray = globalData.initialArray.slice();

  	if (activeTabs.length >=1) {
  		for (var j=0; j < activeTabs.length; j++) {
  			activeTabs[j].classList.remove("active");
  		}
    }

    selectedTab.classList.add("active");
    activeTabContent.style.display = "none";
    activeTabId = selectedTab.getAttribute("data-array-method");
    activeTabContent = document.querySelector("div[data-array-method=" + activeTabId + "]");
    activeTabContent.style.display = "flex";

  });
}

// Call selected method
for (var i=0; i < executeButton.length; i++) {
  execute(executeButton[i]);
};

function execute(btn) {
  btn.addEventListener("click", function (e) {
    arrayMethods[globalData.selectedMethod]();
  });
}
