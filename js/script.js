"use strict";
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(reg => {
    }).catch(err => {
    });
}
function deleteContent(created) {
    var _a;
    const domContent = document.getElementById(created);
    const title = (_a = domContent === null || domContent === void 0 ? void 0 : domContent.querySelector("h3")) === null || _a === void 0 ? void 0 : _a.textContent;
    let permission = window.confirm(`${title}を削除しますか？`);
    if (permission == false)
        return;
    domContent === null || domContent === void 0 ? void 0 : domContent.remove();
    let data = readData();
    data = data.filter(elem => {
        return elem.created != created;
    });
    console.log(data);
    writeData(data);
}
function moveToEditView(id) {
    location.href = `edit.html?id=${id}`;
}
{
    const DATA_NAME = "mealData";
    let data = readData();
    let section = document.querySelector("div#menuInfo");
    data.sort((a, b) => {
        const dateA = Date.parse(a.created);
        const dateB = Date.parse(b.created);
        return dateB - dateA;
    });
    data.forEach(elem => {
        if (section === null)
            return;
        let dishes = elem.dishes.join(`</li><li>`);
        dishes = `<li>${dishes}</li>`;
        const memoText = (elem.memo == undefined || elem.memo == "") ? "" : `
        <h4 id="menuMemo">メモ</h4>
        ${elem.memo}
        `;
        const date = new Date(Date.parse(elem.created));
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dateString = `${year}/${month}/${day}`;
        section.innerHTML += `
        <section class="field" id="${elem.created}">
            <div class="fieldTitle">
                <small id="created">${dateString}</small>
                <h3>${elem.name}</h3>
            </div>
            <div class="fieldMenu">
                <button class="editButton" onclick="moveToEditView('${elem.created}')">✏️</button>
                <button class="deleteButton" onclick="deleteContent('${elem.created}')">❌</button>
            </div>
            <div class="fieldContent">
                <ul>
                    ${dishes}
                </ul>
                ${memoText}
            </div>
        </section>
        `;
    });
}
