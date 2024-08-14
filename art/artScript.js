
// Define a function that accepts a callback
function fetchArtProduct(callback) {
    fetch('./artProduct.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Call the callback function with the fetched data
            callback(data);
        })
        .catch(error => {
            console.error('Error fetching the JSON file:', error);
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

function createTile( product , container ){

        // creating tile
        const tile = document.createElement("div");
        tile.classList.add("elementContainer");

        // creating tile image
        const tileImage = document.createElement("div");
        tileImage.classList.add("elementImg");
        tileImage.style.backgroundImage = `url( ${product.imgSrc} )` ;

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
        tileText.appendChild(tileName );
        tileText.appendChild(tilePrice);

        // appending/inserting the hovered heart in the actual button
        heartButton.appendChild(hoveredHeart);

        // appending/inserting the text section and heart button into text section container
        tileTextContainer.appendChild(tileText);
        tileTextContainer.appendChild(heartButton);

        // appending/inserting the tile image and tile text container into the tile
        tile.appendChild( tileImage );
        tile.appendChild( tileTextContainer );

        container.appendChild(tile);

}

function generateFeatured( product ){

    const featuredContainer = document.getElementById("featured");
    for( let i = 0 ; i < 8 ; i++ ){
        createTile(product[i] ,featuredContainer );
    }

}

function generateTop( product ){
    const topPurchasedContainer = document.getElementById("topPurchases");
    for( let i = 0 ; i < 8 ; i++ ){
        createTile(product[i] ,topPurchasedContainer );
    }

}

function generateTrending( product ){

    const trendingContainer = document.getElementById("trending");
    for( let i = 0 ; i < 4 ; i++ ){
        createTile(product[i] ,trendingContainer );
    }

}


function generateTile( sortedArray , section ){

    switch(section){

        case 'featured':
            generateFeatured( sortedArray );
            break;
        
        case 'topPurchased':
            generateTop( sortedArray );
            break;
        case 'trending':
            generateTrending( sortedArray );
            break;
        default:
            console.error("what error");

    }
}




// Use the function with a callback
fetchArtProduct(artProduct => {
    // Perform operations on artProduct here

    console.log( artProduct.artProduct.imgSrc )

    const sortedOnTrend = sortArray( artProduct.artProduct , 'trendRating' );
    const sortedOnfeatured = sortArray( artProduct.artProduct , 'featuredIndex' );
    const sortedOnPurchased = sortArray( artProduct.artProduct , 'numberOfPurchased' );

    generateTile( sortedOnfeatured , 'featured' );
    generateTile( sortedOnPurchased , 'topPurchased' );
    generateTile( sortedOnTrend , 'trending' );


});
