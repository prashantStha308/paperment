let imageSource = [
  "../assets/image/Art_Supplies/Camel/watercolor-camel-large.jpg",
  "../assets/image/Art_Supplies/Camel/watercolor-camel-small.jpg",
  "../assets/image/Art_Supplies/Doms/colorPencil-Doms-Small.jpg",
  "../assets/image/Art_Supplies/Doms/colorPencil24-Doms.jpg"
];

function applyImage(){
  const sliderImage = document.getElementsByClassName( "sliderImg" );
  for( let i = 0; i < sliderImage.length; i++ ){
      sliderImage[i].style.backgroundImage = `url( ${ imageSource[i] } )`;
  }
}
applyImage();



// Fetching the data from ./artProduction.json
function fetchArtProduct(callback) {
  fetch("./artProduct.json")
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

// The sortArray function uses insertion sort to sort the array
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
// Tile generator
function createTile(product, container) {
  let type = product.type;
  // creating tile
  const tile = document.createElement("div");
  tile.classList.add("elementContainer");
  tile.setAttribute(
    "onclick",
    `displayProduct('${product.type}' , '${product.id}')`
  ); 

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

function generateFeatured(product) {
  const featuredContainer = document.getElementById("featured");
  // creating tiles that are to be inserted in the featured section
  for (let i = 0; i < product.length; i++) {
    createTile(product[i], featuredContainer);
  }
}

function generateTop(product) {
  const topPurchasedContainer = document.getElementById("topPurchases");
  // creating tiles that are to be inserted in the Top Purchased section
  for (let i = 0; i < 8; i++) {
    createTile(product[i], topPurchasedContainer);
  }
}

function generateTrending(product) {
  const trendingContainer = document.getElementById("trending");
  // creating tiles that are to be inserted in the Trending section
  for (let i = 0; i < 4; i++) {
    createTile(product[i], trendingContainer);
  }
}

function generateTile(sortedArray, section) {
  switch (section) {
    case "featured":
      generateFeatured(sortedArray);
      break;

    case "topPurchased":
      generateTop(sortedArray);
      break;
    case "trending":
      generateTrending(sortedArray);
      break;
    default:
      console.error("what error");
  }
}

// Use the function with a callback
fetchArtProduct((artProduct) => {


  // sorting the datas on different biases and storing them as an array
  const sortedOnTrend = sortArray(artProduct.artProduct, "trendRating");
  const sortedOnfeatured = sortArray(artProduct.artProduct, "featuredIndex");
  const sortedOnPurchased = sortArray(artProduct.artProduct,"numberOfPurchased" );

  generateTile(sortedOnfeatured, "featured");
  generateTile(sortedOnPurchased, "topPurchased");
  generateTile(sortedOnTrend, "trending");


});
