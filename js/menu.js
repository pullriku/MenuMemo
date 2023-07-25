"use strict";
const DATA_NAME = "mealData";
class Menu {
    constructor(name = "", dishes = [], created = new Date().toISOString(), memo = "") {
        this.name = name;
        this.dishes = dishes;
        this.created = created;
        this.memo = memo;
    }
}
function openLink(path) {
    location.pathname = strPath(path);
}
function strPath(path) {
    const repositoryName = "MenuMemo";
    if (location.hostname == "tyomogit.github.io") {
        return `/${repositoryName}/${path}`;
    }
    else {
        return `/${path}`;
    }
}
function readData() {
    var _a, _b;
    let anyData = JSON.parse((_a = localStorage.getItem(DATA_NAME)) !== null && _a !== void 0 ? _a : "[]");
    let data;
    if (Array.isArray(anyData)) {
        data = anyData;
    }
    else {
        localStorage.setItem(DATA_NAME, JSON.stringify(new Array()));
        data = JSON.parse((_b = localStorage.getItem(DATA_NAME)) !== null && _b !== void 0 ? _b : "");
    }
    return data;
}
function writeData(data) {
    localStorage.setItem(DATA_NAME, JSON.stringify(data));
}
