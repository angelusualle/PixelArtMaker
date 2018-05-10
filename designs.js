// Select color input
let color = 'black';
// Select size input
let height = 1;
let width = 1;
// When size is submitted by the user, call makeGrid()
document.querySelector('input[type="submit"]').addEventListener('click', (clickEvt) => {
    clickEvt.preventDefault();
    height = document.querySelector('#inputHeight').value;
    width = document.querySelector('#inputWidth').value;
    makeGrid();
});

document.querySelector('#pixelCanvas').addEventListener('click', (clickEvent) => {
    if (clickEvent.target.nodeName == 'TD') {
        clickEvent.target.style.backgroundColor = document.querySelector('input[type="color"]').value;
    }
});

function makeGrid() {
    let table = document.querySelector('#pixelCanvas');
    table.innerHTML = '';
    for (let i = 0; i < height; ++i) {
        let row = table.insertRow(0);
        for (let j = 0; j < width; ++j) {
            row.insertCell(j);
        }
    }
    document.body.appendChild(table);
}
