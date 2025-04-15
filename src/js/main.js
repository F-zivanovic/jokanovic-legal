const navHamburgerIcon = document.getElementById('nav-hamburger');
const navList = document.getElementById('nav-list');
const navItemDropdown = document.getElementById('nav-item-dropdown');
const navLinkToggle = document.getElementById('nav-link-toggle');


// Open/close mobile menu and animate hamburger icon
navHamburgerIcon.addEventListener('click', ()=>{
  navList.classList.toggle('active');
  navHamburgerIcon.classList.toggle('open');
});

// Open/close submenu/dropdown 
navLinkToggle.addEventListener('click', (e)=>{
  e.stopPropagation();
  navItemDropdown.classList.toggle('active');
});


// Close submenu/dropdown
document.addEventListener('click', (e)=>{
  if(!navItemDropdown.contains(e.target)){
    navItemDropdown.classList.remove('active');
  }
});


// Close mobile menu and dropdown menu on width larger than 992
window.addEventListener('resize', () => {
  if (window.innerWidth >= 992) {
    navList.classList.remove('active');
    navHamburgerIcon.classList.remove('open');
    navItemDropdown.classList.remove('active');
  }
});


// Arrow up icon
const arrowUp = document.getElementById('arrow-up');

document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    arrowUp.classList.add("active");
  } else {
    arrowUp.classList.remove("active");
  }
});

const scrollBtn = document.querySelector(".arrow__up");

scrollBtn.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});

// Dynamic date
document.getElementById("year").textContent = new Date().getFullYear();