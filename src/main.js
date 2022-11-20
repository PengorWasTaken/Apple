let open = document.querySelectorAll('.products__card-btn');
let close = document.querySelector('.close');
let overlay = document.querySelector('.overlay');

Array.from(open).forEach((item) => {
    item.addEventListener('click', () => {
        overlay.style.display = 'flex'
    });
});

close.addEventListener('click', () => {
    overlay.style.display = 'none'
});

let infobtn = document.querySelector('.products__card-desc');
let info = document.querySelector('.products__card-info');
let infoclose = document.querySelector('.products__card-infoclose');

infobtn.addEventListener('click', () => {
    info.style.display = 'flex'
    infoclose.style.display = 'flex'
});

infoclose.addEventListener('click', () => {
    info.style.display = 'none'
    infoclose.style.display = 'none'
});

let infobtn1 = document.querySelector('.products__card-desc1');
let info1 = document.querySelector('.products__card-info1');
let infoclose1 = document.querySelector('.products__card-infoclose1');

infobtn1.addEventListener('click', () => {
    info1.style.display = 'flex'
    infoclose1.style.display = 'flex'
});

infoclose1.addEventListener('click', () => {
    info1.style.display = 'none'
    infoclose1.style.display = 'none'
});

let infobtn2 = document.querySelector('.products__card-desc2');
let info2 = document.querySelector('.products__card-info2');
let infoclose2 = document.querySelector('.products__card-infoclose2');

infobtn2.addEventListener('click', () => {
    info2.style.display = 'flex'
    infoclose2.style.display = 'flex'
});

infoclose2.addEventListener('click', () => {
    info2.style.display = 'none'
    infoclose2.style.display = 'none'
});

let infobtn3 = document.querySelector('.products__card-desc3');
let info3 = document.querySelector('.products__card-info3');
let infoclose3 = document.querySelector('.products__card-infoclose3');

infobtn3.addEventListener('click', () => {
    info3.style.display = 'flex'
    infoclose3.style.display = 'flex'
});

infoclose3.addEventListener('click', () => {
    info3.style.display = 'none'
    infoclose3.style.display = 'none'
});
