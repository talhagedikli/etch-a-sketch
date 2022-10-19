const container = document.querySelector('.container');
const cells = document.getElementsByClassName('cell');
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

function changeColor(e, color) {
    alert(this);
}

createTable(16);


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';;
    })
}
