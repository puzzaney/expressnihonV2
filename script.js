'use strict';

const home = document.querySelector('#hero');
const btnHome = document.querySelector('#home');
const btnServices = document.querySelectorAll('.services');
const btnAbout = document.querySelector('#about');
const homeSection = document.querySelector('#hero');
const servicesSection = document.querySelector('#services');
const copyright = document.querySelector('#copyright');

console.log(homeSection);
// Event Handlers
btnServices.forEach((btn) =>
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    })
);

btnHome.addEventListener('click', function (e) {
    e.preventDefault();
    homeSection.scrollIntoView({ behavior: 'smooth' });
});

// Copyright Management
const now = new Date();
const year = now.getFullYear();
copyright.textContent = `©️Express Nihon Academy ${year}`;
