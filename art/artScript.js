
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

// Use the function with a callback
fetchArtProduct(artProduct => {
    // Perform operations on artProduct here
    console.log('Inside callback:', artProduct);
});



// Tile generator

function tileGenerator(){
    
    const tilecontainer = document.getElementsByClassName("tileContainer");

    Array.from(tilecontainer).forEach( container=>{
        for( let i = 0; i < 8 ; i++ ){
            // creating tile
            const tile = document.createElement("div");
            tile.classList.add("elementContainer");
    
            // creating tile image
            const tileImage = document.createElement("div");
            tileImage.classList.add("elementImg");
    
            // creating tile text Container
            const tileTextContainer = document.createElement("div");
            tileTextContainer.classList.add("elementTextContainer");

            // creating the text section
            const tileText = document.createElement("p");
            tileText.classList.add("elementText");
    
            // creating a span that will contain the name of the company
            const tileName = document.createElement("span");
            tileName.classList.add("elementName");

            // creating a span element that'll contain the price of the product
            const tilePrice = document.createElement("span");
            tilePrice.classList.add("elementPrice");

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

            container.appendChild(tile)
        }
    } )
}

tileGenerator();