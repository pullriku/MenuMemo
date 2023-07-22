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
