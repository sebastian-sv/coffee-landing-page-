const toggleMenu = document.getElementById("toggle-menu");
const headerMenu = document.querySelector(".header-menu");
const lineTop = document.querySelector(".line-top");
const lineCenter = document.querySelector(".line-center");
const lineBottom = document.querySelector(".line-bottom");
const links = document.querySelectorAll(".header-menu a");

    /* scrollReval */
    // v3
window.sr = new ScrollReveal();

sr.reveal('.grid-item', { 
  interval: 12, 
  reset: true,
  distance: '100%', 
  origin: 'bottom',
});


toggleMenu.addEventListener("click",showMenu);

function showMenu(){
  lineTop.classList.toggle("active");
  lineCenter.classList.toggle("active");
  lineBottom.classList.toggle("active");
  
  headerMenu.classList.toggle("active");
}

for (link of links) {
   link.addEventListener("click",()=>{
    lineTop.classList.remove("active");
    lineCenter.classList.remove("active");
    lineBottom.classList.remove("active");
    
    headerMenu.classList.remove("active");     
   });
};





















