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

function removeFromList(event) {
    const item = event.target;
    item.parentElement.parentElement.remove();
    updateCounter();
}

function addListItem (text) {
    // Create the parent node
    const item = document.createElement("div");
    item.classList.add("todo");
    item.classList.add("horizontal-container");

    // The <div> for the checkbox
    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("check");
    item.appendChild(checkboxDiv);

    // The <div> for the text
    const textDiv = document.createElement("div");
    textDiv.classList.add("text");
    textDiv.appendChild(document.createTextNode(text));
    item.appendChild(textDiv);

    // The <div> for the clear button
    const clearDiv = document.createElement("div");
    clearDiv.classList.add("clear");

    const clearButton = document.createElement("button");
    clearButton.classList.add("button-like-text");
    clearButton.innerText = "X";
    clearDiv.appendChild(clearButton);

    clearButton.addEventListener("click", removeFromList);

    item.appendChild(clearDiv);

    // Add the created node to the html page
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
