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
    const menuMemoField = document.getElementById("menuMemoField");
    let menuName = menuNameField.value;
    let mealType = mealTypeSelector.value;
    const menuContents = menuContentsField.value;
    const menuMemo = menuMemoField.value;
    let date = new Date();
    let data = readData();
    switch (mealType) {
        default:
        case "memo":
            mealType = "メモ";
            break;
        case "morning":
            mealType = "朝食";
            break;
        case "lunch":
            mealType = "昼食";
            break;
        case "dinner":
            mealType = "夕食";
            break;
    }
    if (menuName == "") {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dateString = `${year}/${month}/${day}`;
        menuName = `${dateString}の${mealType}`;
    }
    data.push(new Menu(menuName, menuContents === null || menuContents === void 0 ? void 0 : menuContents.split("\n"), date, menuMemo));
    localStorage.setItem(DATA_NAME, JSON.stringify(data));
    location.pathname = "/";
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
