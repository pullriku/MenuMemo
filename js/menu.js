"use strict";
class Menu {
    constructor(name = "", dishes = [], created = new Date()) {
        this.name = name;
        this.dishes = dishes;
        this.created = created;
    }
}
