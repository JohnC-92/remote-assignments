// Request 1

var welcome = document.querySelector('h1');

welcome.addEventListener('click', () => {
    welcome.innerHTML = "Have a Good Time!";
});

// Request 2

var menuIcon = document.querySelector('.menu-a');
var floatDIV = document.querySelector('.floatDIV');
var closeMenu = document.querySelector('.closeMenu');

menuIcon.addEventListener('click', () => {
    floatDIV.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    floatDIV.style.display = 'none';
});

// Request 3

var button = document.querySelector('button');
var features2 = document.querySelector('.features2');

button.addEventListener('click', () => {
    features2.style.display = 'flex';
    features2.className = 'features';   
});