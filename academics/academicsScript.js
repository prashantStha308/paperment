const dotsContainer = document.getElementById("dotsContainer");
const sliderElements = document.getElementsByClassName("sliderElements");

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
    dotsContainer.innerHTML = "";
    Array.from(sliderElements).forEach( ()=>{
        const dots = document.createElement("div");
        dots.classList.add("dots");
        dotsContainer.appendChild(dots);
        dots.setAttribute( "onclick" , `showSlides(${i})` );
        i++;
    } );
}

addDots(); //Dynamically adds required amount of dots in the image slider
showSlides(0);