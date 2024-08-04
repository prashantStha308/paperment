/* Script here will effect all the existing html files*/
'use strict'

//Start of Header Scroll animation section
var didScroll; //boolean to determine if the user has scrolled or not
var lastScrollTop = 0; //last time where the scroll ended
var delta = 10; // to prevent 'accidental' trigger
var navbarHeight = 85; // height of the element. 85 is a guessed number
var navbarElem = document.getElementById("header"); //getting the whole header

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
    var st = window.scrollY;

    if (Math.abs(lastScrollTop  -  st) <= delta)
        return;

      if (st > lastScrollTop && st > navbarHeight) {
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