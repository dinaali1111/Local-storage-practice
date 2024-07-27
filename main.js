// Get all list items and the experiment div
const listItems = document.querySelectorAll(".color-list__item");
const experimentDiv = document.querySelector(".experiment");

// Retrieve saved color from localStorage
const savedColor = window.localStorage.getItem("color");

if (savedColor) {
  experimentDiv.style.backgroundColor = savedColor;

  // Remove 'color-list__item--active' class from all list items
  listItems.forEach((item) => {
    item.classList.remove("color-list__item--active");
  });

  const activeItem = document.querySelector(`[data-color="${savedColor}"]`);
  if (activeItem) {
    activeItem.classList.add("color-list__item--active");
  }
}

// Add click event listener to each list item
listItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    // Remove 'color-list__item--active' class from all list items
    listItems.forEach((item) => {
      item.classList.remove("color-list__item--active");
    });

    // Add 'color-list__item--active' class to the clicked list item
    const clickedItem = event.currentTarget;
    clickedItem.classList.add("color-list__item--active");

    // Save the clicked item's color to localStorage
    const color = clickedItem.dataset.color;
    window.localStorage.setItem("color", color);

    experimentDiv.style.backgroundColor = color;
  });
});
