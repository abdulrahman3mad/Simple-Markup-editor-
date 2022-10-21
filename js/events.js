
let stylesBtnsFunctions = {
    "bold-btn": {
        event: "onclick",
        action: toggleTextFontWeight,
    },

    "italic-btn":
    {
        event: "onclick",
        action: toggleFontStyle,
    },

    "bigger-size-btn":
    {
        event: "onclick",
        action: largenFontSize,
    },

    "smaller-size-btn":
    {
        event: "onclick",
        action: shortenFontSize,
    },

    "underline-btn":
    {
        event: "onclick",
        action: toggleTextDecoration,
    },

    "reset-btn":
    {
        event: "onclick",
        action: resetEditorStyle,
    },

    "remove-text-btn":
    {
        event: "onclick",
        action: resetEditor,
    },

    "color-input":
    {
        event: "oninput",
        action: changeColor,
    },
}

window.onload = () => editorTextInput.focus();

submitBtn.onclick = () => {
    if (isTextEditorAreaEmpty()) return;
    insertItem(editorTextInput.value)
    resetEditor();
}

stylesBtns.forEach((btn) => {
    let btnId = btn.getAttribute("id");
    let eventType = stylesBtnsFunctions[btnId].event;
    setBtnEvent(btn, eventType);
})

function setBtnEvent(btn, eventType) {
    let btnId = btn.getAttribute("id");

    // btn.onclick, btn.oninput, etc.
    btn[eventType] = function () {
        editorTextInput.focus();
        if (isTextEditorAreaEmpty()) return;

        (stylesBtnsFunctions[btnId].action)();
    }
}