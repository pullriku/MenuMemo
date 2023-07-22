"use strict";
class Menu {
    constructor(name = "", dishes = [], created = new Date(), memo = "") {
        this.name = name;
        this.dishes = dishes;
        this.created = created;
        this.memo = memo;
    }
}
function openLink(path) {
    const repositoryName = "MenuMemo";
    if (location.hostname == "/tyomogit.github.io") {
        location.pathname = `/${repositoryName}/${path}`;
    }
    else {
        location.pathname = `/${path}`;
    }
}
