const mainInputBox = document.getElementById("input-box");
const list = document.getElementById("todos-items");

const counter = document.getElementById("item-count");
const footer = document.getElementById("todos-footer");

mainInputBox.addEventListener("blur", addToList);
mainInputBox.addEventListener("keydown", addToList);

function addToList (event) {
    if (event.type != "blur" && event.code != "Enter") {
        return;
    }

    const text = mainInputBox.value;
    if (text === "") {
        return;
    }

    mainInputBox.value = "";
    
    addListItem(text);
    updateCounter();
}

function addListItem (text) {
    const item = document.createElement("div");
    item.classList.add("todo");
    item.classList.add("horizontal-container");

    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("check");
    item.appendChild(checkboxDiv);

    const textDiv = document.createElement("div");
    textDiv.classList.add("text");
    textDiv.appendChild(document.createTextNode(text));
    item.appendChild(textDiv);

    const clearDiv = document.createElement("div");
    clearDiv.classList.add("clear");
    item.appendChild(clearDiv);

    list.appendChild(item);
}

function updateCounter() {
    const listLength = list.children.length;

    let counterText = listLength;
    if (listLength === 1) {
        counterText += " item left";
    } else {
        counterText += " items left";
    }

    counter.innerText = counterText;

    if (listLength > 0) {
        footer.classList.remove("hide");
    } else {
        footer.classList.add("hide");
    }
}
