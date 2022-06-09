const TITLE = document.getElementById("header");
const CONTENT = document.getElementById("wrapper");
const ROW_COUNT = 4;
const COL_COUNT = 5;
window.addEventListener('DOMContentLoaded', () => {
  console.log("DOM loaded");
  setUp();
});

function setUp() {
  TITLE.innerText = "build a grid with javascript";
  buildGrid();
}

function buildGrid() {
  for (let i = 0; i < ROW_COUNT; i++) {
    for (let j = 0; j < COL_COUNT; j++) {
      const CELL = document.createElement("div");
      const CELL_ID = i * COL_COUNT + j + 1;
      CELL.id = CELL_ID;
      CELL.className = "cell_off";
      CELL.innerText = CELL_ID;
      CELL.addEventListener('click', changeCellState);
      CONTENT.appendChild(CELL);
    }
  }
}

function changeCellState(e) {
  const TARGET = e.target;
  console.log(TARGET.id);
  if (TARGET.className != "cell_on") {
    TARGET.className = "cell_on";
  } else {
    TARGET.className = "cell_off";
  }
}
