/* Script here will effect all the existing html files*/

// For image slider
const dotsContainer = document.getElementById("dotsContainer");
const sliderElements = document.getElementsByClassName("sliderElements");
let currentSlideIndex = 0;

function showSlides(n) {
  const dot = document.getElementsByClassName("dots");
  for (let i = 0; i < sliderElements.length; i++) {
    dot[i].classList.remove("dotActive");
    sliderElements[i].classList.remove("sliderActive");
  }
  dot[n].classList.add("dotActive");
  sliderElements[n].classList.add("sliderActive");
}

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

let slideShow;

function startSlideShow() {
  slideShow = setInterval(() => {
    currentSlideIndex++;
    if (currentSlideIndex >= sliderElements.length) {
      currentSlideIndex = 0;
    }
    showSlides(currentSlideIndex);
  }, 2000);
}

addDots(); // Dynamically adds required amount of dots in the image slider
showSlides(currentSlideIndex); // Shows the first slide by default
startSlideShow(); // Start the automatic slideshow
// End of image Slider

// Go To Top Section

function goToTop() {
  let scrollDiv = document.getElementById("header").offsetTop;
  window.scrollTo({ top: scrollDiv, behavior: "smooth" });
}

// For product section

// fetching datas from all the json files

// Fetching art Data
function fetchArtProduct(callback) {
  fetch("./art/artProduct.json")
    .then((response) => {
      if (!response.ok) {
        throw Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      // Call the callback function with the fetched data
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching the JSON file:", error);
    });
}

// Fetching academic data
function fetchAcademicProduct(callback) {
  fetch(".academic/academicProduct.json")
    .then((response) => {
      if (!response.ok) {
        throw Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      // Call the callback function with the fetched data
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching the JSON file:", error);
    });
}

// Fetching children data
function fetchChildrenProduct(callback) {
  fetch(".childrenBook/childrenProduct.json")
    .then((response) => {
      if (!response.ok) {
        throw Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      // Call the callback function with the fetched data
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching the JSON file:", error);
    });
}

// Fetching academic data
function fetchSportsProduct(callback) {
  fetch(".sports/sportsProduct.json")
    .then((response) => {
      if (!response.ok) {
        throw Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      // Call the callback function with the fetched data
      callback(data);
    })
    .catch((error) => {
      console.error("Error fetching the JSON file:", error);
    });
}

function sortArray(array, property) {
  // Create a copy of the array to avoid mutating the original
  const arr = array.slice();

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j][property] < key[property]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }

  return arr;
}

function createTile(product) {
  const container = document.getElementById("productContainer");

  for (let i = 0; i < 4; i++) {
    // creating tile
    const tile = document.createElement("div");
    tile.classList.add("elementContainer");
    tile.setAttribute("onclick", `displayProduct('${product.type}')`); //copy this line to every other script

    // creating tile image
    const tileImage = document.createElement("div");
    tileImage.classList.add("elementImg");
    tileImage.style.backgroundImage = `url( ${product.imgSrc} )`;

    // creating tile text Container
    const tileTextContainer = document.createElement("div");
    tileTextContainer.classList.add("elementTextContainer");

    // creating the text section
    const tileText = document.createElement("p");
    tileText.classList.add("elementText");

    // creating a span that will contain the name of the company
    const tileName = document.createElement("span");
    tileName.classList.add("elementName");
    tileName.textContent = product.name;

    // creating a span element that'll contain the price of the product
    const tilePrice = document.createElement("span");
    tilePrice.classList.add("elementPrice");
    tilePrice.innerHTML = ` <br> Rs.${product.price}`;

    // creating a heart button
    const heartButton = document.createElement("button");
    heartButton.classList.add("heartButton");

    // creating a heart button that'll come in effect when the button is hovered
    const hoveredHeart = document.createElement("div");
    hoveredHeart.classList.add("hoverHeart");

    // appending/inserting the name and price span to the text Section
    tileText.appendChild(tileName);
    tileText.appendChild(tilePrice);

    // appending/inserting the hovered heart in the actual button
    heartButton.appendChild(hoveredHeart);

    // appending/inserting the text section and heart button into text section container
    tileTextContainer.appendChild(tileText);
    tileTextContainer.appendChild(heartButton);

    // appending/inserting the tile image and tile text container into the tile
    tile.appendChild(tileImage);
    tile.appendChild(tileTextContainer);

    // appending the child to the container
    container.appendChild(tile);
  }
}

function showArt(id) {
  const productImage = document.getElementById("mainProductImg");
  fetchArtProduct((artProduct) => {
    for (let i = 0; i < artProduct.artProduct.length; i++) {
      if (artProduct.artProduct[i].id == id) {
        productImage.style.backgroundImage = `url( ${artProduct.artProduct[i].imgSrc} )`;
      }
    }

    let sortedArt = sortArray(artProduct.artProduct, "trendRating");
    createTile(sortedArt);
    console.log("sdgsdgkn");
  });
}

function showProduct(type, id) {
  switch (type) {
    case "art":
      showArt(id);
      console.log("saudg");
      break;
    case "academics":
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

function displayProduct(type, id) {
  const imageSlide = document.getElementsByClassName("mainImageSlider")[0];
  const mainBody = document.getElementById("mainBody");
  const productBody = document.getElementById("productBody");

  clearInterval(slideShow);

  imageSlide.classList.add("revokeDisplay");
  mainBody.classList.add("revokeDisplay");
  productBody.style.display = "block";

  console.log(type + " and " + id);
  showProduct(type, id);
}

// for suggesting products
