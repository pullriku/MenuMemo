"use strict";
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(reg => {
        console.log('サービスワーカーを登録しました', reg);
    }).catch(err => {
        console.log('登録失敗', err);
    });
}
function main() {
    var _a, _b;
    const DATA_NAME = "mealData";
    console.log(localStorage.getItem(DATA_NAME));
    localStorage.removeItem("testMeal");
    let anyData = JSON.parse((_a = localStorage.getItem(DATA_NAME)) !== null && _a !== void 0 ? _a : "[]");
    let data;
    if (Array.isArray(anyData)) {
        console.log("読み込み成功");
        data = anyData;
    }
    else {
        localStorage.setItem(DATA_NAME, JSON.stringify(new Array()));
        data = JSON.parse((_b = localStorage.getItem(DATA_NAME)) !== null && _b !== void 0 ? _b : "");
    }
    console.log("data:", data);
    // console.log("Debug");
    // console.log(data);
    // let debugData = new Menu("カレーライス", ["カレー", "あああ", "あ", ], new Date());
    // data.push(debugData)
    // localStorage.setItem(DATA_NAME, JSON.stringify(
    //     data
    // ))
    let section = document.querySelector("div#menuInfo");
    data.forEach(elem => {
        if (section === null)
            return;
        let dishes = elem.dishes.join(`</li><li>`);
        dishes = `<li>${dishes}</li>`;
        section.innerHTML += `
        <section class="field">
        <h3>${elem.name}</h3>
        <ul>
        ${dishes}
        </ul>
        </section>
        `;
    });
}
main();
