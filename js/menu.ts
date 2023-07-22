class Menu {
    name: string;
    dishes: string[];
    created: Date;
    memo: string

    constructor(name: string = "", dishes: string[] = [], created: Date = new Date(), memo: string = "") {
        this.name = name;
        this.dishes = dishes;
        this.created = created;
        this.memo = memo;
    }
}

function openLink(path: string) {
    const repositoryName = "MenuMemo";
    if (location.hostname == "tyomogit.github.io") {
        location.pathname = `/${repositoryName}/${path}`;
    } else {
        location.pathname = `/${path}`;
    }
}