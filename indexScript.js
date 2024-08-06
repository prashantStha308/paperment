//Start of Header Scroll animation section
var didScroll; //boolean to determine if the user has scrolled or not
var lastScrollTop = 0; //last time where the scroll ended
var delta = 10; // to prevent 'accidental' trigger
var navbarHeight = 85; // height of the element. 85 is a guessed number
var navbarElem = document.getElementById("header"); //getting the header element

window.addEventListener('scroll', ()=> {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 300); // debounce

function hasScrolled() {
    var st = window.scrollY; //captures how much the user has scrolled

    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if ( st > navbarHeight) {
        navbarElem.classList.add('beActive');
        navbarElem.style.transition = "all 0.3s ease-out";
    } else {
        if(st - window.innerHeight < window.outerHeight) {
            navbarElem.classList.remove('beActive');
        }
    }
    lastScrollTop = st;
}
//End of Header Scroll animation section



const shopSection = document.getElementById("shop"); //shop section
const shopSection1 = document.getElementById("shopSection1"); //The first shop section
const shopSection1Elements = document.getElementsByClassName("shopElements"); //Array of elements of class "shopSection1Elements"
const shopHeading = document.getElementById("sectionHeading");

// Generating grid areas for shop sections elements
let i = 1;
Array.from(shopSection1Elements).forEach( element=>{
    element.style.gridArea = `sectionElement${i}`;
    i++;
} );

// Generating grid areas for shop headings
let j = 1;
Array.from(shopHeading).forEach( element=>{
    element.style.gridArea = `shopHeading${j}`;
    i++;
} );
