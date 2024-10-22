const navbarNav = document.querySelector
('.navbar-nav');

document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};



const hamburger = document.querySelector
('#hamburger-menu');

document.addEventListener('click', function (e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})


const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown');


dropdownToggle.addEventListener('click', function(e) {
    e.preventDefault();
    dropdownMenu.classList.toggle('active');
});


document.addEventListener('click', function(event) {
    
    if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('active');
    }
});
