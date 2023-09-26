// Cache "container" div to DOM
const container_div = document.querySelector(".container");

// Create grid div and add a class
const grid_div = document.createElement("div");
grid_div.classList.add("grid");

// Cache reset button and add event listener for prompt of grid size and pass to create_squares function
const reset_button = document.querySelector(".reset");
reset_button.addEventListener("click", function () {
  grid_div.innerHTML = "";
  let squares_count = Number(prompt("What sized grid? "));
  if (squares_count > 100) {
    squares_count = 100;
    alert("Grid size can only be max of 100!");
  }
  create_squares(squares_count);
});

// Create the grid columns and rows
function create_squares(squares) {
  // Grid dimensions
  let grid_columns = squares;
  let grid_rows = grid_columns;

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
}

// Start with a 16 x 16 grid
create_squares(16);
