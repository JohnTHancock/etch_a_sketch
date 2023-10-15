let container = document.getElementById('container');
let resetButton = document.getElementById('resetButton');
let input;
let cellSize;
let totalCells;
let gridCell;
let cells;
let redBox = document.getElementById('redBox');

container.classList.add('baseCell', 'blackCell');

function loadNewGrid(input) {
    if (input === undefined || input === null) {
        input = 16;
    }
    cellSize = (960/input)-2;
    totalCells = input**2;

    for (let i=0; i< totalCells; i++) {
    let gridCell = document.createElement('div');
    gridCell.style.width = cellSize + 'px';
    gridCell.style.height = cellSize + 'px';
    container.appendChild(gridCell);
    gridCell.setAttribute('class', 'baseCell');
    }
}


container.addEventListener('mouseover', (event) => {
    let target = event.target;
    target.className = target.className + ' blackCell';
});

window.onload = (event) => loadNewGrid();

resetButton.addEventListener('click', (event) => {
    input = prompt('How many cells would you like per side?');
    if (input > 100 || input < 1 || isNaN(input)) {
        input = prompt('Please enter a number between 1 and 100.');
    } else {
        cells = document.querySelectorAll('.baseCell');
        console.log(input);
        cells.remove(); //this is the problem. container.remove deletes the container but cells.remove returns as not a function
        loadNewGrid(input);
    }
})