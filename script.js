// Grid dimensions
const grid_columns = 20;
const grid_rows = 20;

// Cache "container" div to DOM
const container_div = document.querySelector(".container");

// Create grid div and add a class
const grid_div = document.createElement("div");
grid_div.classList.add("grid");

// Create the grid columns and rows
for (let i = 0; i < grid_columns; i++) {
  let grid_column = document.createElement("div");
  grid_column.classList.add("column");

  // Create the row in each column and append it to the column
  for (let j = 0; j < grid_rows; j++) {
    let grid_cell = document.createElement("div");
    grid_cell.classList.add("cell");

    // Hover state event listener
    grid_cell.addEventListener("mouseenter", function () {
      this.classList.add("hover");
    });
    grid_column.appendChild(grid_cell);
  }
  grid_div.appendChild(grid_column); // Append the columns to the grid
}

// Append "grid" div to "container" div
container_div.appendChild(grid_div);
