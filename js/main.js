let burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    document.body.classList.toggle('open');
});

// if window width is more than 768px hide mobile menu
function myFunction(x) {
    if (x.matches) { // If media query matches
        document.body.classList.remove('open');
    }
}

let x = window.matchMedia("(min-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction);

let titles = document.querySelectorAll('.map-content li:first-child');

titles.forEach(title => {
    title.parentElement.classList.remove('ul-active');
    title.parentElement.addEventListener('click', () => {
        title.parentElement.classList.toggle('ul-active');
    });
});