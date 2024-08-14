/* Script here will effect all the existing html files*/

// For image slider
const dotsContainer = document.getElementById("dotsContainer");
const sliderElements = document.getElementsByClassName("sliderElements");
let currentSlideIndex = 0;

function showSlides( n ) {
    const dot = document.getElementsByClassName( "dots" );
    for(let i = 0; i<sliderElements.length ; i++){
        dot[i].classList.remove("dotActive");
        sliderElements[i].classList.remove( "sliderActive" );
    }
    dot[n].classList.add("dotActive");
    sliderElements[n].classList.add( "sliderActive" );
}

function addDots(){
    let i = 0;
    Array.from(sliderElements).forEach( ()=>{
        const dots = document.createElement("div");
        dots.classList.add("dots");
        dotsContainer.appendChild(dots);
        dots.setAttribute( "onclick" , `showSlides(${i})` );
        i++;
    } );
}


function startSlideShow() {
    setInterval(() => {
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

// Start of tile generator

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

// tileGenerator();

// Go To Top Section

function goToTop(){
    let scrollDiv = document.getElementById("header").offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}