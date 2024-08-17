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

function showArt(id) {
  
  const productImage = document.getElementById("mainProductImg");
  fetchArtProduct((artProduct) => {
    for (let i = 0; i < artProduct.artProduct.length; i++) {
      if (artProduct.artProduct[i].id == id) {
        productImage.style.backgroundImage = `url( ${artProduct.artProduct[i].imgSrc} )`;
      }
    }
  });
}

function showAcademics(id) {
  
  const productImage = document.getElementById("mainProductImg");
  fetchAcademicProduct((academicProduct) => {
    for (let i = 0; i < academicProduct.academicProduct.length; i++) {
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

const imageSlide = document.getElementsByClassName("mainImageSlider")[0];
const mainBody = document.getElementById("mainBody");
const productBody = document.getElementById("productBody");
const footer = document.getElementsByTagName( "footer" )[1];

function displayProduct(type, id) {

  clearInterval(slideShow);

  console.log(imageSlide)

  imageSlide.classList.add("revokeDisplay");
  mainBody.classList.add("revokeDisplay");
  footer.classList.add("revokeDisplay");
  productBody.classList.remove("revokeDisplay");

  console.log(type + " and " + id);
  showProduct(type, id);
}

function goBack(){

  imageSlide.classList.remove("revokeDisplay");
  mainBody.classList.remove("revokeDisplay");
  footer.classList.remove("revokeDisplay");
  productBody.classList.add("revokeDisplay");

}
// for suggesting products
