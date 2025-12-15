const DEFAULT_GRID_SIZE = 16;
const MIN_GRID_SIZE = 1;
const MAX_GRID_SIZE = 100;
const MAX_DARKNESS_LEVEL = 10;
const DARKNESS_INCREMENT = 0.1;

const container = document.getElementById("container");
const button = document.getElementById("set-grid-btn");

makeGrid();

button.addEventListener("click", () => {
  let newGrid = prompt(
    "Enter new numer of squares per side (maximum 100 squares per side):",
  );

  if (isNaN(newGrid) || newGrid < MIN_GRID_SIZE || newGrid > MAX_GRID_SIZE) {
    alert("Invalid input! Please enter a number between 1 and 100.");
    return;
  }

  makeGrid(newGrid);
});

function makeGrid(grid = DEFAULT_GRID_SIZE) {
  container.innerHTML = "";

  for (let i = 0; i < grid; i++) {
    const thisRow = document.createElement("div");
    thisRow.classList = "row";
    container.appendChild(thisRow);

    for (let j = 0; j < grid; j++) {
      const gridBox = document.createElement("div");
      gridBox.dataset.darkness = 0;
      gridBox.addEventListener("mouseover", () => {
        if (gridBox.dataset.darkness < MAX_DARKNESS_LEVEL) {
          gridBox.dataset.darkness++;
          gridBox.style.filter = `brightness(${1 - gridBox.dataset.darkness * DARKNESS_INCREMENT})`;
        }
      });
      thisRow.appendChild(gridBox);
    }
  }
}
