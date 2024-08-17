function addToCart() {
  const color = document.getElementById("color").value;
  const dimension = document.getElementById("dimension").value;
  alert(`Added to cart!\nColor: ${color}\nDimension: ${dimension}`);
}

function addReview() {
  const reviewText = document.getElementById("reviewText").value;
  const reviewRating = document.querySelector(
    'input[name="rating"]:checked'
  ).value;
  const reviewList = document.getElementById("reviewList");

  const reviewDiv = document.createElement("div");
  reviewDiv.classList.add("review");

  const reviewP = document.createElement("p");
  reviewP.textContent = reviewText;

  const reviewSpan = document.createElement("span");
  reviewSpan.textContent =
    "★".repeat(reviewRating) + "☆".repeat(5 - reviewRating);

  reviewDiv.appendChild(reviewP);
  reviewDiv.appendChild(reviewSpan);

  reviewList.appendChild(reviewDiv);

  // Clear the form
  document.getElementById("reviewForm").reset();
}

// For color checkbox

const colorCheckboxes = document.getElementsByClassName("colorChoice");

function checkColor(color) {
  for (let i = 0; i < colorCheckboxes.length; i++) {
    // Set all checkboxes to unchecked
    colorCheckboxes[i].checked = false;

    // If the checkbox has the specified color ID, check it
    if (colorCheckboxes[i].id === color) {
      colorCheckboxes[i].checked = true;
      console.log("Checkbox with ID '" + color + "' is checked.");
    }
  }
}

// For dimention checkbox

const dimensionCheckboxes = document.getElementsByClassName("dimensionChoice");

function checkDimension(dimension) {
  for (let i = 0; i < dimensionCheckboxes.length; i++) {
    // Set all checkboxes to unchecked
    dimensionCheckboxes[i].checked = false;

    // If the checkbox has the specified dimension ID, check it
    if (dimensionCheckboxes[i].id === dimension) {
      dimensionCheckboxes[i].checked = true;
      console.log("Checkbox with ID '" + dimension + "' is checked.");
    }
  }
}
