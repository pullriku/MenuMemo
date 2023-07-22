
const DATA_NAME = "mealData";
const submitButton = document.getElementById("submitButton");
submitButton?.addEventListener("click", event => {
    register();
});

function register() {
    const menuNameField = document.getElementById("menuNameField") as HTMLInputElement;
    const mealTypeSelector = document.getElementById("mealTypeSelector") as HTMLInputElement;
    const menuContentsField = document.getElementById("menuContentsField") as HTMLTextAreaElement;

    const menuName = menuNameField.value;
    const mealType = mealTypeSelector.value;
    const menuContents = menuContentsField.value;
    
    let data = readData();
    
    data.push(
        new Menu(
            menuName ?? "名前なし",
            menuContents?.split("\n"),
            new Date()
        )
    );
    
    localStorage.setItem(DATA_NAME, JSON.stringify(data));
    
    location.href = "https://tyomogit.github.io/MenuRegisterer/";
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