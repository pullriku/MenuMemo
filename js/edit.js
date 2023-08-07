"use strict";
var _a;
const id = new URL(location.href).searchParams.get("id");
const data = readData();
let editData = new Menu();
data.forEach(elem => {
    if (elem.created == id) {
        editData = elem;
    }
});
const menuNameField = document.getElementById("menuNameField");
const mealTypeSelector = document.getElementById("mealTypeSelector");
const menuContentsField = document.getElementById("menuContentsField");
const menuMemoField = document.getElementById("menuMemoField");
menuNameField.value = editData.name;
mealTypeSelector.value = (_a = editData.type) !== null && _a !== void 0 ? _a : "memo";
menuContentsField.value = editData.dishes.join("\n");
menuMemoField.value = editData.memo;
console.log(editData);
