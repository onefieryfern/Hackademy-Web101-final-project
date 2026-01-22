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

    // Clear input box
    mainInputBox.value = "";

    // Add item to the shown list
    const htmlItem = document.createElement("div");
    htmlItem.classList.add("todo");
    htmlItem.appendChild(document.createTextNode(text));

    list.appendChild(htmlItem);

    // Update item count
    updateCounter();
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
