
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
    console.log( artProduct);
});



// Tile generator

