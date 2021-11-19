// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const flinks = document.querySelector(".links");

navToggle.addEventListener("click", function (){
    // console.log(links.classList);
    // console.log(links.classList.contains("links"));

    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add('show-links');
    // }
    flinks.classList.toggle("show-links");
})
