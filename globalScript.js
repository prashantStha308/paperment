/* Script here will effect all the existing html files*/

// For image slider
const dotsContainer = document.getElementById("dotsContainer");
const sliderElements = document.getElementsByClassName("sliderElements");
let currentSlideIndex = 0;

// function to make the image slider work. This function removes the active class from all the elements and then assigns the active class to the element who's dot was clicked. The clicked dot passes a number by which this function works
function showSlides(n) {
  const dot = document.getElementsByClassName("dots");
  for (let i = 0; i < sliderElements.length; i++) {
    dot[i].classList.remove("dotActive");
    sliderElements[i].classList.remove("sliderActive");
  }
  dot[n].classList.add("dotActive");
  sliderElements[n].classList.add("sliderActive");
}

// addDots() calculates the number of elements in the image slider and adds dots accordingly
function addDots() {
  let i = 0;
  Array.from(sliderElements).forEach(() => {
    const dots = document.createElement("div");
    dots.classList.add("dots");
    dotsContainer.appendChild(dots);
    dots.setAttribute("onclick", `showSlides(${i})`);
    i++;
  });
}

let slideShow; //A variable to store the unique ID sent by the setInterval function.
// The above variable can be used to stop the execution of the setInterval if needed

// startSlideShow() function makes the image slider move automatically
function startSlideShow() {
  // The setInterval function increments the index of current slide and passes it to the showSlides function every 2 seconds/2000 mili seconds
  slideShow = setInterval(() => {
    currentSlideIndex++;
    if (currentSlideIndex >= sliderElements.length) {
      currentSlideIndex = 0; //if the slider reaches the end, start again from the beginning
    }
    showSlides(currentSlideIndex);
  }, 2000);
}

addDots(); // Dynamically adds required amount of dots in the image slider
showSlides(currentSlideIndex); // currentSlideIndex shows the first slide by default
startSlideShow(); // Start the automatic slideshow

// End of image Slider

// Go To Top Section

function goToTop() {
  // The offsetTop returns the value top position of the element
  let scrollDiv = document.getElementById("header").offsetTop;

  // The windows.scrollTo() method moves the page to a destination element, in this case, the scrollDiv which has the offsetTop value of the header element
  window.scrollTo({ top: scrollDiv, behavior: "smooth" });
}

// For product page section

// fetching datas from all the json files

function fetchProductData(url, callback) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching the JSON file:", error);
    });
}

// functions to evoke the main fetch functions
function fetchArtProduct(callback) {
  fetchProductData("./art/artProduct.json", callback);
}

function fetchAcademicProduct(callback) {
  fetchProductData("./academic/academicProduct.json", callback);
}

function fetchChildrenProduct(callback) {
  fetchProductData("./childrenBook/childrenProduct.json", callback);
}

function fetchSportsProduct(callback) {
  fetchProductData("./sports/sportsProduct.json", callback);
}
// End of fetching json files

let currentPrices = {};

function calculateArt(id, increment) {
  fetchArtProduct((product) => {
    let productFound = false;

    for (let i = 0; i < product.artProduct.length; i++) {
      if (product.artProduct[i].id === id) {
        productFound = true;
        let productPrice = product.artProduct[i].price;

        if (!currentPrices[id]) {
          currentPrices[id] = 0;
        }

        currentPrices[id] += productPrice * increment;
        console.log(currentPrices[id]);
        break;
      }
    }

    if (!productFound) {
      console.error("Product Not Found");
    }

    const totalPrice = document.getElementById("total");
    totalPrice.textContent = currentPrices[id];
  });
}

const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");

function productQuantity(id, type, increment) {
  console.log("runing");
  console.log(type);
  console.log(id);
  switch (type) {
    case "art":
      calculateArt(id, increment);
      break;
    case "academic":
      calculateAcademics(id, increment);
      break;
    case "children":
      calculateChildren(id, increment);
      break;
    case "sports":
      calculateSports(id, increment);
      break;
    default:
      console.log("error");
  }
}

// Shows the product image in the product page
function showArt(id) {
  const productImage = document.getElementById("mainProductImg");
  fetchArtProduct((artProduct) => {
    for (let i = 0; i < artProduct.artProduct.length; i++) {
      let productId = artProduct.artProduct[i].id;
      let productType = artProduct.artProduct[i].type;

      incrementButton.setAttribute(
        "onclick",
        `productQuantity('${productId}', '${productType}' , 1)`
      );

      decrementButton.setAttribute(
        "onclick",
        `productQuantity('${productId}', '${productType}', -1)`
      );

      if (artProduct.artProduct[i].id == id) {
        console.log("imageSource" + artProduct.artProduct[i].id);
        productImage.style.backgroundImage = `url( ${artProduct.artProduct[i].imgSrc} )`;
      }
    }
  });
}

function showAcademics(id) {
  const productImage = document.getElementById("mainProductImg");
  fetchAcademicProduct((academicProduct) => {
    for (let i = 0; i < academicProduct.academicProduct.length; i++) {
      let productId = academicProduct.academicProduct[i].id;
      let productType = academicProduct.academicProduct[i].type;

      incrementButton.setAttribute(
        "onclick",
        `productQuantity('${productId}', '${productType}', 1)`
      );
      decrementButton.setAttribute(
        "onclick",
        `productQuantity('${productId}', '${productType}', -1)`
      );

      if (academicProduct.academicProduct[i].id == id) {
        productImage.style.backgroundImage = `url( ${academicProduct.academicProduct[i].imgSrc} )`;
      }
    }
  });
}

function showChildren(id) {
  const productImage = document.getElementById("mainProductImg");
  fetchChildrenProduct((childrenProduct) => {
    for (let i = 0; i < childrenProduct.childrenProduct.length; i++) {
      let productId = childrenProduct.childrenProduct[i].id;
      let productType = childrenProduct.childrenProduct[i].type;

      incrementButton.setAttribute(
        "onclick",
        `productQuantity('${productId}', '${productType}', 1)`
      );
      decrementButton.setAttribute(
        "onclick",
        `productQuantity('${productId}', '${productType}', -1)`
      );

      if (childrenProduct.childrenProduct[i].id == id) {
        productImage.style.backgroundImage = `url( ${childrenProduct.childrenProduct[i].imgSrc} )`;
      }
    }
  });
}

function showSports(id) {
  const productImage = document.getElementById("mainProductImg");
  fetchSportsProduct((sportsProduct) => {
    for (let i = 0; i < sportsProduct.sportsProduct.length; i++) {
      let productId = sportsProduct.sportsProduct[i].id;
      let productType = sportsProduct.sportsProduct[i].type;

      incrementButton.setAttribute(
        "onclick",
        `productQuantity('${productId}', '${productType}', 1)`
      );
      decrementButton.setAttribute(
        "onclick",
        `productQuantity('${productId}', '${productType}', -1)`
      );

      if (sportsProduct.sportsProduct[i].id == id) {
        productImage.style.backgroundImage = `url( ${sportsProduct.sportsProduct[i].imgSrc} )`;
      }
    }
  });
}

function showProduct(type, id) {
  switch (type) {
    case "art":
      showArt(id);
      console.log("saudg");
      break;
    case "academic":
      showAcademics(id);
      break;
    case "children":
      showChildren(id);
      break;
    case "sports":
      showSports(id);
      break;
    default:
      console.log("error");
  }
}

// essential variables for the product page to work
const imageSlide = document.getElementsByClassName("mainImageSlider")[0];
const mainBody = document.getElementById("mainBody");
const productBody = document.getElementById("productBody");
const footer = document.getElementsByTagName("footer")[1];

function displayProduct(type, id) {
  clearInterval(slideShow);

  imageSlide.classList.add("revokeDisplay");
  mainBody.classList.add("revokeDisplay");
  footer.classList.add("revokeDisplay");
  productBody.classList.remove("revokeDisplay");

  console.log(type + " and " + id);
  showProduct(type, id);
}

// function to return to normal page from product page
function goBack() {
  imageSlide.classList.remove("revokeDisplay");
  mainBody.classList.remove("revokeDisplay");
  footer.classList.remove("revokeDisplay");
  productBody.classList.add("revokeDisplay");
}

// Functions for checkboxes
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

const dimensionCheckboxes = document.getElementsByClassName("dimentionChoice");

Array.from(dimensionCheckboxes).forEach((element) => {
  element.addEventListener("click", function () {
    checkDimension(element.id);
  });
});

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
