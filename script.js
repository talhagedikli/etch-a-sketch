const container = document.querySelector('.container');
let cells = document.getElementsByClassName('cell');
let rows = document.getElementsByClassName('row');
const sizeButton = document.querySelector('button');

sizeButton.addEventListener('click', () => {
    deleteCells();
    let size = Number(prompt('enter the size'));
    createTable(size);
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
          e.target.style.backgroundColor = 'black';
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
