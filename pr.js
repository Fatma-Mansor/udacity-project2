/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


let s = document.querySelectorAll("section");//i get all sections craeted in landing page
const fragment = document.createDocumentFragment(); // creat empty fragment to put all lists and links in it
const ull=document.querySelector("#navbar__list"); // get ul by id
s.forEach(s => {
  
 // make a for loop to craet navbar and select section from it
  const li=document.createElement("li"); // craet new li to put a in it 
  let a=document.createElement("a"); //craet links of navbar
const l=s.getAttribute("data-nav"); //get text of data-nav to put it in links
const newtext = document.createTextNode(l); //creat the text from data nav
a.appendChild(newtext); //name linkes by newtext
li.appendChild(a); //put all likes in list
fragment.append(li); //and put all list in empty fragment
  a.addEventListener("click", function() {
      s.scrollIntoView({behavior: "smooth"}); //go to the section which linked by a
    
      const l=document.getElementsByClassName("your-active-class"); //get all elements named(your-active-class)
      if (l.length > 0) { 
        l[0].className = l[0].className.replace("your-active-class", "");// replace all element with (your-active-class) by empty class
      }
      s.className += "your-active-class"; //put the class(your-active-class) in the current section 

  var current = document.getElementsByClassName("active"); // get all elements named with (active) class
  if (current.length > 0) { 
    current[0].className = current[0].className.replace("active", ""); //replace all element has (active)class with empty class
  }
  this.className += "active"; //put the current a (active)class
  })
});

ull.appendChild(fragment); //put all fragment to unorderlist
 /* 
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active