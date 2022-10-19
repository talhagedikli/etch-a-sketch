const container = document.querySelector('.container');
let cells = document.getElementsByClassName('cell');
let rows = document.getElementsByClassName('row');


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

function changeColor(color) {
    alert(this);
}

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', (e) => {
        alert('here');
    })
}

createTable(16);