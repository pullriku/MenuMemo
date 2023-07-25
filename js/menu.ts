const DATA_NAME = "mealData";

class Menu {
    name: string;
    dishes: string[];
    created: string;
    memo: string

    constructor(name: string = "", dishes: string[] = [], created: string = new Date().toISOString(), memo: string = "") {
        this.name = name;
        this.dishes = dishes;
        this.created = created;
        this.memo = memo;
    }
}

function openLink(path: string) {
    location.pathname = strPath(path);
}

function strPath(path: string): string {
    const repositoryName = "MenuMemo";
    if (location.hostname == "tyomogit.github.io") {
        return `/${repositoryName}/${path}`;
    } else {
        return `/${path}`;
    }
}

function readData(): Menu[] {
    let anyData = JSON.parse(localStorage.getItem(DATA_NAME) ?? "[]");
    let data: Menu[];
    
    if(Array.isArray(anyData)) {
        data = anyData;
    } else {
        localStorage.setItem(DATA_NAME, JSON.stringify(new Array()));
        data = JSON.parse(localStorage.getItem(DATA_NAME) ?? "");
    }

    return data;
}

function writeData(data: Menu[]) {
    localStorage.setItem(DATA_NAME, JSON.stringify(data));
}