const topBlock = document.querySelector('.top-block');
const area = document.querySelector('.area');
const editBlock = document.querySelector('.edit-block');
const styleBlock = document.querySelector('.style-block');
const mainBlock = document.querySelector('.main-block');
const addBlock = document.querySelector('.add-block');
const formCreateTable = document.querySelector('.formCreateTable');
const formCreateList = document.querySelector('.formCreateList');
const box1 = document.querySelector('.containerColor');

function editBtn() {
    area.value = topBlock.innerHTML;
    editBlock.classList.remove('hidden');
    styleBlock.classList.add('hidden');
}

function saveBtn() {
    topBlock.innerHTML = area.value;
    editBlock.classList.add('hidden');
}

function styleBtn() {
    editBlock.classList.add('hidden');
    styleBlock.classList.remove('hidden');
}

function addBtn() {
    mainBlock.classList.add('hidden');
    addBlock.classList.remove('hidden');
}

function backBtn() {
    mainBlock.classList.remove('hidden');
    addBlock.classList.add('hidden');
}

function fontSize() {
    topBlock.style.fontSize = event.target.value;
}

function fontFamily() {
    topBlock.style.fontFamily = event.target.value;
}

function fontWeight() {
    topBlock.style.fontWeight = event.target.checked ? 'bold' : 'normal';
}

function fontStyle() {
    event.target.checked ? topBlock.classList.add('style') : topBlock.classList.remove('style');
}

function chooseBtn() {
    if(event.target.dataset.create === 'table'){
        formCreateTable.classList.remove('hidden');
        formCreateList.classList.add('hidden');
    }
    else if(event.target.dataset.create === 'list'){
        formCreateTable.classList.add('hidden');
        formCreateList.classList.remove('hidden');
    }
}

function createTable() {
    let form = document.forms['formCreateTable'];
    let countTr = form.countTr.value;
    let countTd = form.countTd.value;
    let widthTd = form.widthTd.value;
    let heightTd = form.heightTd.value;
    let widthBorder = form.widthBorder.value;
    let typeBorder = form.typeBorder.value;
    let colorBorder = form.colorBorder.value;
    area.value += `<table>`;
    for(let i=1; i<=countTr; i++){
        area.value += `<tr>`;
        for(let j=1; j<=countTd; j++){
            area.value += `<td style="width:${widthTd}px; height:${heightTd}px; border: ${widthBorder}px ${typeBorder} ${colorBorder}">TD</td>`;
        }
        area.value += `</tr>`;
    }
    area.value += `</table>`;
    form.classList.add('hidden');
    backBtn();
}

function createList(){
    let form = document.forms['formCreateList'];
    let countLi = form.countLi.value;
    let typeMarks = form.typeMarks.value
    area.value += `<ul type="${typeMarks}">`;
    for(let k=1; k<=countLi; k++){
        area.value += `<li>Item</li>`;
    }
    area.value += `</ul>`;
    form.classList.add('hidden');
    backBtn();
}


function colorsText() {
    box1.style.display = 'flex';
    styleBlock.classList.add('blockStyle');
    for (let i = 0; i < box1.children.length; i++) {
        box1.children[i].onmousedown = function () {
            let miniBoxColor = getComputedStyle(box1.children[i]).color;
            topBlock.style.color = `${miniBoxColor}`;
        }
        box1.children[i].onmouseup = function(){
            box1.style.display = 'none';
            styleBlock.classList.remove('blockStyle');
        }
    }
}

function colorsBackground() {
    box1.style.display = 'flex';
    styleBlock.classList.add('blockStyle')
    for (let i = 0; i < box1.children.length; i++) {
        box1.children[i].onmousedown = function () {
            let miniBoxColor = getComputedStyle(box1.children[i]).background;
            topBlock.style.background = miniBoxColor;
        }
        box1.children[i].onmouseup = function(){
            box1.style.display = 'none';
            styleBlock.classList.remove('blockStyle');
        }
    }
}
