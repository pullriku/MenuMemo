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
    let section = document.querySelector("div#menuInfo");
    data.reverse();
    data.forEach(elem => {
        if (section === null)
            return;
        let dishes = elem.dishes.join(`</li><li>`);
        dishes = `<li>${dishes}</li>`;
        const memoText = elem.memo == undefined || elem.memo == "" ? "" : `
        <h4 id="menuMemo">メモ</h4>
        ${elem.memo}
        `;
        const date = new Date(Date.parse(elem.created));
        console.log(date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dateString = `${year}/${month}/${day}`;
        section.innerHTML += `
        <section class="field">
        <small id="created">${dateString}</small>
        <h3>${elem.name}</h3>
        <ul>
        ${dishes}
        </ul>
        ${memoText}
        </section>
        `;
    });
}
main();
