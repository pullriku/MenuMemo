const id = new URL(location.href).searchParams.get("id");
const data = readData();

let editData: Menu = new Menu();
data.forEach(elem => {
    if (elem.created == id) {
        editData = elem;
    }
});

const menuNameField = document.getElementById("menuNameField") as HTMLInputElement;
const mealTypeSelector = document.getElementById("mealTypeSelector") as HTMLInputElement;
const menuContentsField = document.getElementById("menuContentsField") as HTMLTextAreaElement;
const menuMemoField = document.getElementById("menuMemoField") as HTMLTextAreaElement;

menuNameField.value = editData.name;
mealTypeSelector.value = editData.type ?? "memo";
menuContentsField.value = editData.dishes.join("\n");
menuMemoField.value = editData.memo;

console.log(editData);
