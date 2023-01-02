
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
if (filename == "index.html") {
    /*typing header text on page load*/
    var typed = new Typed(".autoType", {
        strings: ["Interactive Multimedia and Design Student."],
        typeSpeed: 75,
        loop: false
    });
}


//hamburger menu
//tutorial used: https://www.youtube.com/watch?v=ydZc17rlR5E
const hamburger = document.getElementById("hamburger");
const otherLinks = document.getElementById("otherLinks");


hamburger.addEventListener("click", () => {
    otherLinks.classList.toggle("show");
    hamburger.classList.toggle("show");
})


/*To do:
give credit to type creator
cerate variables for colours
*/ 