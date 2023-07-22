
const DATA_NAME = "mealData";
const submitButton = document.getElementById("submitButton");
submitButton?.addEventListener("click", event => {
    register();
});

function register() {
    const menuNameField = document.getElementById("menuNameField") as HTMLInputElement;
    const mealTypeSelector = document.getElementById("mealTypeSelector") as HTMLInputElement;
    const menuContentsField = document.getElementById("menuContentsField") as HTMLTextAreaElement;
    const menuMemoField = document.getElementById("menuMemoField") as HTMLTextAreaElement;

    let menuName = menuNameField.value;
    let mealType = mealTypeSelector.value;
    const menuContents = menuContentsField.value;
    const menuMemo = menuMemoField.value;

    let date = new Date();
    let data = readData();

    switch(mealType) {
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
    data.push(
        new Menu(
            menuName,
            menuContents?.split("\n"),
            date,
            menuMemo
        )
    );
    
    localStorage.setItem(DATA_NAME, JSON.stringify(data));
    
    openLink("index.html");
}

function readData(): Menu[] {
    let anyData = JSON.parse(localStorage.getItem(DATA_NAME) ?? "[]");
    let data: Menu[];
    
    if(Array.isArray(anyData)) {
        data = anyData;
    } else {
        data = [];
    }

    return data;
}