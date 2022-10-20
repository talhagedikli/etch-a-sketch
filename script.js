const container = document.querySelector('.container');
let cells = document.getElementsByClassName('cell');
let rows = document.getElementsByClassName('row');
const sizeButton = document.querySelector('button');
const maxSize = 32;

const defaultColor = '#000000';
let drawColor = defaultColor;
const colorPicker = document.querySelector("#drawColor");
colorPicker.value = defaultColor;

let draw = false;


function updateColor(event) {

    drawColor = event.target.value;
}


sizeButton.addEventListener('click', () => {
    deleteCells();
    let size = Number(prompt(`enter the canvas size (max ${maxSize})`));
    createTable(Math.min(size, maxSize));
    addEventsToCells();
})


function createRows(num) {
    for (let i = 0; i < num; i++) {
        let newRow = document.createElement('div');
        newRow.className = 'row';
        container.appendChild(newRow);
    }
}

function createTable(size) {
    createRows(size);
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows.length; j++) {
            let newCell = document.createElement('div');
            newCell.className = 'cell';
            rows[i].appendChild(newCell);
        }
    }
}

function changeColor(e, color) {
    e.target.style.backgroundColor = color;
}

function addEventsToCells() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', (e) => {
        if (!draw) return;
        e.target.style.backgroundColor = drawColor;
    })
    cells[i].addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = drawColor;
    })

  }
}

function deleteCells() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

createTable(16);
addEventsToCells();

window.addEventListener("mousedown", function(){
    draw = true
})
// Set draw to false when the user release the mouse
window.addEventListener("mouseup", function(){
    draw = false
})

colorPicker.addEventListener('change', updateColor, false);
colorPicker.select();