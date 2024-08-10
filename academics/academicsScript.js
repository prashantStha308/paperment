const dotsContainer = document.getElementById("dotsContainer");
const sliderElements = document.getElementsByClassName("sliderElements");

function addDots(){
    dotsContainer.innerHTML = "";
    Array.from(sliderElements).forEach( ()=>{
        const dots = document.createElement("div");
        dots.classList.add("dots");
        dotsContainer.appendChild(dots);
    } );
}

addDots();