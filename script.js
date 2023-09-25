// Grid dimensions
const grid_columns = 16;
const grid_rows = 16;

// Cache "container" div to DOM
const container_div = document.querySelector(".container");

// Create grid div and add a class
const grid_div = document.createElement("div");
grid_div.classList.add("grid");

// Create the grid columns
for (let i = 0; i < grid_columns; i++) {
  let grid_column = document.createElement("div");
  grid_column.classList.add("column");

  // Create the row in each column and append it to the column
  for (let j = 0; j < grid_rows; j++) {
    let grid_cell = document.createElement("div");
    grid_cell.classList.add("cell");
    grid_cell.innerText = `${i + 1}-${j + 1}`;
    grid_column.appendChild(grid_cell);
  }
  grid_div.appendChild(grid_column); // Append the columns to the grid
}

// Append "grid" div to "container" div
container_div.appendChild(grid_div);
