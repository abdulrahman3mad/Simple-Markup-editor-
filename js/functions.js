// Buttons Styles Functions -----
function toggleTextFontWeight() {
    let curEditorFontWeight = editorTextInput.style.fontWeight;
    editorTextInput.style.fontWeight = item.style["fontWeight"] = (curEditorFontWeight == "bold") ? "normal" : "bold";
}

function toggleFontStyle() {
    let curEditorFontStyle = editorTextInput.style.fontStyle;
    editorTextInput.style.fontStyle = item.style["fontStyle"] = (curEditorFontStyle == "italic") ? "normal" : "italic";
}

function largenFontSize() {
    if (currentFontSizeIndex < 4) {
        currentFontSizeIndex++;
        editorTextInput.style.fontSize = item.style["fontSize"] = avaiableFontSizes[currentFontSizeIndex];
    }
}

function shortenFontSize() {
    if (currentFontSizeIndex > 0) {
        currentFontSizeIndex--;
        editorTextInput.style.fontSize = item.style["fontSize"] = avaiableFontSizes[currentFontSizeIndex];
    }
}

function toggleTextDecoration() {
    let curEditorTextDecoration = editorTextInput.style.textDecoration;
    editorTextInput.style.textDecoration = item.style["textDecoration"] = (curEditorTextDecoration == "underline") ? "none" : "underline";
}

function changeColor() {
    editorTextInput.style.color = item.style["color"] = colorInput.value;
}
//------

let insertItem = function (textToDisplay) {
    item.text = textToDisplay;
    items.push(item);
    render();
}

let removeItem = function (index) {
    items.splice(index, 1);
    render();
}

let resetAddedItemStyle = function (index) {
    items[index].style = {};
    render();
}

let render = function () {
    displayedTextArea.innerHTML = "";
    items.forEach((item, index) => {
        let HTMLItem = setItemInHTMLForm(item, index);
        setStyle(HTMLItem, item);
        displayedTextArea.append(HTMLItem);
    })
}

let setItemInHTMLForm = function (item, index) {
    let HTMLItem = document.createElement("p");
    HTMLItem.setAttribute("id", items.length);

    let iconsContainer = `
    <div class="item">
        <div class="icons">
            <i class="fa-sharp fa-solid fa-power-off" onclick=resetAddedItemStyle(${index})></i><i class="fa-solid fa-trash" onclick=removeItem(${index})></i>
        </div>
        <p>${item.text}</p>
    </div>
    `
    HTMLItem.innerHTML = iconsContainer;
    return HTMLItem;
}

let setStyle = function (HTMLItem, itemData) {
    let styleKeys = Object.keys(itemData.style); // ["fontWeight", "fontStyle", etc.]
    styleKeys.forEach((style) => {
        HTMLItem.style[style] = itemData.style[style];
    })
}

let resetEditor = function () {
    resetEditorStyle();
    editorTextInput.value = "";
    editorTextInput.focus();
}

let resetEditorStyle = function () {
    currentFontSizeIndex = 0;
    item = {
        text: "",
        style: {}
    };

    editorTextInput.removeAttribute("style");
}

let isTextEditorAreaEmpty = function () {
    return (editorTextInput.value == "");
}


