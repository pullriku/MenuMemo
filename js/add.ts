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

    let mealTypeName = "";
    switch(mealType) {
        default:
        case "memo":
            mealTypeName = "メモ";
            break;
        case "morning":
            mealTypeName = "朝食";
            break;
        case "lunch":
            mealTypeName = "昼食";
            break;
        case "dinner":
            mealTypeName = "夕食";
            break;
    }

    if (menuName == "") {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dateString = `${year}/${month}/${day}`;
        menuName = `${dateString}の${mealTypeName}`;
    }
    const param = new URLSearchParams(location.search);
    const idInParam = param.get("id");
    const created = idInParam ?? date.toISOString();

    if(idInParam != null) {
        data = data.filter(elem => {
            return elem.created != idInParam;
        });
    }

    data.push(
        new Menu(
            menuName,
            mealType as MenuType,
            menuContents?.split("\n").filter(elem => elem != ""),
            created,
            menuMemo
        )
    );
    
    writeData(data);
    
    clearURLParameters();
    openLink("index.html");
}

{
    const submitButton = document.getElementById("submitButton");
    submitButton?.addEventListener("click", event => {
        register();
    });
}