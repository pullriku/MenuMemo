class Menu {
    name: string;
    dishes: string[];
    created: Date;

    constructor(name: string = "", dishes: string[] = [], created: Date = new Date()) {
        this.name = name;
        this.dishes = dishes;
        this.created = created;
    }
}