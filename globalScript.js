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

const tilecontainer = document.getElementsByClassName("tileContainer");

Array.from(tilecontainer).forEach( container=>{
    for( let i = 0; i < 8 ; i++ ){

        const tile = document.createElement("div");
        tile.classList.add("elementContainer");
    
        const tileImage = document.createElement("div");
        tileImage.classList.add("elementImg");
    
        const tileText = document.createElement("p");
        tileText.classList.add("elementText");
    
        const tileName = document.createElement("span");
        tileName.classList.add("elementName");
    
        const tilePrice = document.createElement("span");
        tilePrice.classList.add("elementPrice");
    
        tileText.appendChild(tileName );
        tileText.appendChild(tilePrice);

        tile.appendChild( tileImage );
        tile.appendChild( tileText );

        container.appendChild(tile)
    }
} )


// Go To Top Section

function goToTop(){
    let scrollDiv = document.getElementById("header").offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
}