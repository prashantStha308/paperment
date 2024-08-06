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
