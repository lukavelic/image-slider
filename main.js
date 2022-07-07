const arrowClick = function(evt) {
    const id = evt.target.id;

    if(id === 'left-arrow' && imagePosition > 0) {
        imagePosition -= 1;
    } else if (id === 'right-arrow' && imagePosition < imageCount - 1) {
        imagePosition += 1;
    }

    carousel.style.transform = `translate(calc(-1024px * ${imagePosition}))`;

    dotFiller();
}

const dotClick = function(evt) {
    const dotId = evt.target.id.slice(4);
    imagePosition = parseInt(dotId);

        carousel.style.transform = `translate(calc(-1024px * ${imagePosition}))`;

    dotFiller();
}

const dotFiller = function () {
    const dots = document.querySelectorAll('.dot');
    console.log(dots)

    for(let i = 0; i < dots.length; i++) {
        if(i === imagePosition) {
            dots[i].classList.add('active-dot');
        } else {
            dots[i].classList.remove('active-dot');
        }
    }
}

const navDots = function() {
    for(let i = 0; i < imageCount; i++) {
        if(i === imagePosition) {
            createDot()
            const activeDot = document.querySelector(`#dot-${i}`).setAttribute('class', 'dot active-dot');
        } else {
            createDot();
        }
    }
}

const createDot = function() {
    const dotIcon = document.createElement('div')
    dotIcon.setAttribute('class', 'dot');
    dotIcon.setAttribute('id', `dot-${dotIncr}`);
    dotIcon.addEventListener('click', dotClick)

    const container = document.querySelector('.nav-dots').appendChild(dotIcon);

    dotIncr++;
}

let dotIncr = 0;
let imagePosition = 0;
const imageCount = document.querySelectorAll('img').length;
const leftArrow = document.querySelector(".left-arrow").addEventListener('click', arrowClick);
const rightArrow = document.querySelector(".right-arrow").addEventListener('click', arrowClick);
const carousel = document.querySelector(".carousel");



navDots();


