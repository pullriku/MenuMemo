"use strict";
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
