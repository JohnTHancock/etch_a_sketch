let container = document.getElementById('container');
let input = 16;
let cellSize = (960/input)-2;
totalCells = input**2;

for (let i=0; i< totalCells; i++) {
let gridCell = document.createElement('div');
gridCell.style.width = cellSize + 'px';
gridCell.style.height = cellSize + 'px';
container.appendChild(gridCell);
gridCell.setAttribute('class', 'cell');
}

console.log(cellSize);
console.log(totalCells);