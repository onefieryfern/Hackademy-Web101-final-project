// List functionality
/*
class Item {
    constructor(text) {
        this.text = text;
        this.type = "active";
    }
}
*/

// let todoList = [];

function addToList (event) {
    if (event.type != "blur" && event.code != "Enter") {
        return;
    }

    const text = mainInputBox.value;
    if (text == "") {
        return;
    }

    // Add item to the internal list
    // todoList.push(text);

    // Clear input box
    mainInputBox.value = "";

    // Add item to the shown list
    const htmlItem = document.createElement("div");
    htmlItem.classList.add("todo");

    htmlItem.appendChild(document.createTextNode(text));

    const list = document.getElementById("todos-items");
    list.appendChild(htmlItem);

    // Update item count
    const listLength = list.children.length;

    let counterText = listLength;
    if (listLength == 1) {
        counterText += " item left";
    } else {
        counterText += " items left";
    }

    const counter = document.getElementById("item-count");
    counter.innerText = counterText;
}

const mainInputBox = document.getElementById("input-box");

mainInputBox.addEventListener("blur", addToList);
mainInputBox.addEventListener("keydown", addToList);
