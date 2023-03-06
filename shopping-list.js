const addInput = document.getElementById('add-field');
const colorInput = document.getElementById("color-field");
const itemList = document.getElementById("item-list");

const listDiv = document.getElementById("list-div"); //for hiding/showing
const toggle = document.getElementById("toggle-button");

// add item
function addItem() {
  // const lastPickedColor = colorInput.value;
  const li = document.createElement("li");
  li.innerHTML = addInput.value;
  
  // changeColor();
  itemList.appendChild(li);
  // li.style.color = lastPickedColor;
  addInput.value = "";
}
//addItem() e o color set korte hobe,,na hoy akabar changecolor k call korar por abar kichu add korle porer add kora kuno kichute color set hobe na karon new element add korar age change color k call kora hoyeche tai sudu ager gulate e color set hobe..jodi addItem() e color set na kori tahole element add korar por abar change color k call korte hobe tahole se abar sob element k color die dibe//kuno function k call korle call korar somoy ja pay ta nie e kaj kore porer gula te ar focus kore na tai porer add kora gulate color set korte pare na

// remove item
function removeItem() {
  //html er vitore theke li tag gula nilam then jekhaner li gula delete korbo sekhan theke removeChild dilam
  let li1 = document.querySelector("li:first-child");//li direct tag tai . or # not use first theke delete hobe
  let li2 = document.querySelector("li:last-child");//li direct tag tai . or # not use lest theke delete hobe
  let li3 = document.querySelector("li");//li direct tag tai . or # not use not allow first theke delete hobe
  itemList.removeChild(li2);
}

// change color
function changeColor() {
  const List = document.querySelectorAll("li");
  const lastPickedColor = colorInput.value;
  for (let i = 0; i < List.length; i++) {
    List[i].style.color = lastPickedColor;
  }
}

// uppercase
itemList.addEventListener("mouseover", (event) => {
  if (event.target.tagName == "LI") {
    event.target.style.textTransform = "uppercase";
  }
});

// lowercase
itemList.addEventListener("mouseout", (event) => {
  if (event.target.tagName == "LI") {
    event.target.style.textTransform = "lowercase";
  }
});

// hide/show list
function toggleButton() {
  if (listDiv.style.display !== "none") {
    listDiv.style.display = "none";
    toggle.textContent = "Show list";
  } else {
    listDiv.style.display = "block";
    toggle.textContent = "Hide list";
  }
}
