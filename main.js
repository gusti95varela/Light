const btnSwitch = document.querySelector('#slider');
const btnSun = document.querySelector('.sun');
const btnSun2 = document.querySelector('.sun-2');
const btnSun3 = document.querySelector('.sun-3');

btnSwitch.addEventListener('click', () => {
    btnSun.classList.toggle('active');
    btnSun2.classList.toggle('active');
    btnSun3.classList.toggle('active');
})