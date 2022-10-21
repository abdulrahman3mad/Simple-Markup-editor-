//-- btns
let boldBtn = document.getElementById("bold-btn");
let italicBtn = document.getElementById("italic-btn");
let biggerSizeBtn = document.getElementById("bigger-size-btn");
let smallerSizeBtn = document.getElementById("smaller-size-btn");
let underlineBtn = document.getElementById("underline-btn");
let resetBtn = document.getElementById("reset-btn");
let removeTextBtn = document.getElementById("remove-text-btn");
let colorInput = document.getElementById("color-input");
let submitBtn = document.getElementById("submit-btn");

let stylesBtns = Array.from(document.querySelectorAll(".style-btn"));

let displayedTextArea = document.getElementById("displayed-text-area");
let editorTextInput = document.getElementById("editor-text-area");

//--variables declarations 
let currentFontSizeIndex = 0;
let avaiableFontSizes = ["1.25rem", "1.5rem", "1.75rem", "2rem", "2.25rem"];
let item = {
    text: "",
    style: {}
}

let items = []


