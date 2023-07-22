"use strict";
class Menu {
    constructor(name = "", dishes = [], created = new Date(), memo = "") {
        this.name = name;
        this.dishes = dishes;
        this.created = created;
        this.memo = memo;
    }
}
