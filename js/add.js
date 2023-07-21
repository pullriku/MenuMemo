"use strict";
const DATA_NAME = "mealData";
const submitButton = document.getElementById("submitButton");
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", event => {
    register();
});
function register() {
    const menuNameField = document.getElementById("menuNameField");
    const mealTypeSelector = document.getElementById("mealTypeSelector");
    const menuContentsField = document.getElementById("menuContentsField");
    const menuName = menuNameField.value;
    const mealType = mealTypeSelector.value;
    const menuContents = menuContentsField.value;
    let data = readData();
    data.push(new Menu(menuName !== null && menuName !== void 0 ? menuName : "名前なし", menuContents === null || menuContents === void 0 ? void 0 : menuContents.split("\n"), new Date()));
    console.log(data);
    localStorage.setItem(DATA_NAME, JSON.stringify(data));
    location.href = "../index.html";
}
function readData() {
    var _a;
    let anyData = JSON.parse((_a = localStorage.getItem(DATA_NAME)) !== null && _a !== void 0 ? _a : "[]");
    let data;
    if (Array.isArray(anyData)) {
        data = anyData;
    }
    else {
        data = [];
    }
    return data;
}
