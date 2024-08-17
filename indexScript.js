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

// Generating grid areas for shop sections elements
let i = 1;
Array.from(shopSection1Elements).forEach( element=>{
    element.style.gridArea = `sectionElement${i}`;
    i++;
} );


// redirecting functions

const section1 = document.getElementsByClassName("section1Elements");
const section2 = document.getElementsByClassName("section2Elements");
const section3 = document.getElementsByClassName("section3Elements");

function linkGen( className , locat ){
    console.log("sdh")

    Array.from(className).forEach( element=>{
        element.addEventListener( "click" , ()=>{
            window.location.href = `./${locat}/index.html`;
        } )
    } );
}

linkGen( section1 , "art" );
linkGen( section2 , "academic" );
linkGen( section3 , "sports" )