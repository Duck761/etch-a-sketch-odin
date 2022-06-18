const container = document.getElementById('grid-container');
const newGrid = document.getElementById('new-grid');

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");

    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = "black"
    })
    container.appendChild(cell).className = "grid-cell"
  }
}

let cells = document.getElementsByClassName('grid-cell');
function makeNewGrid() {
  console.log("hi")
  const sizeRows = prompt("Width:");
  const sizeCols =  prompt("Height:");
  const row = Number(sizeRows);
  const col = Number(sizeCols);

  if (row > 100) return alert("You can't have more then 100.");
  if (col > 100) return alert("You can't have more then 100.");
  for (i = 0; i < (cells.length); i++) {
    cells[i].style.backgroundColor = "white"
  }
  makeGrid(row, col)
}

makeGrid(16, 16);

newGrid.addEventListener('click', () => {
  makeNewGrid()
})