const body = document.body;
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const heroButton = document.querySelector('.logo-hero');
const homeButton = document.querySelector('.logo');

let activeHero;

heroButton.addEventListener('click', () => {
    activeHero = !activeHero;
    if (!activeHero) {
        hero.style.top = '0';
    } else {
        hero.style.top = '-100dvw';
    }
})

homeButton.addEventListener('click', () => {
    activeHero = !activeHero;
    if (!activeHero) {
        hero.style.top = '0';
    } else {
        hero.style.top = '-100dvw';
    }
})

// ------------------------------------------------------------------------------

import data from '../public/content.json' assert { type: 'json' };
const content = data;

const assets = [
    {
        //"backgroundImage": "../assets/[name of your group's folder]/background.jpg"
    }
];

let sections =[];

content.forEach(object => {
    let section = create('section', 'content');
    section.classList.add(object.title);
    section.setAttribute('id', object.title);
    section.style.background = object.backgroundImage;

    let title;

    let container = create('div', 'container');

    let audioPlayer = create('button', 'audio-player');
    let icon = create('i', 'fa-solid');
    icon.classList.add('fa-play-circle');

    add(icon, audioPlayer);

    let workDescription = create('div', 'work-description');

    let p = create('p');
    p.innerText = object.description;

    add(p, workDescription);

    if (object.titleImage === '' || object.titleImage !== '[your description here]') {
        title = create('h1', 'title');
        let titleText = object.title.replaceAll("-", " ");
        title.innerText = titleText;
    } else {
        title = create('img', 'title');
    }

    add(title, section);

    add(audioPlayer, container);
    add(workDescription, container);

    add(container, section);

    add(section, main);

    sections.push({id: object.title});
});

const playButtons = document.querySelectorAll('.audio-player');

playButtons.forEach(button => {
    let state;

    button.addEventListener('click', () => {
        state = !state;

        if (state) {
            button.firstChild.classList.replace('fa-play-circle', 'fa-pause-circle');
        } else {
            button.firstChild.classList.replace('fa-pause-circle', 'fa-play-circle');
        }
    });
});

const leftNav = document.querySelector('.left-nav');
const rightNav = document.querySelector('.right-nav');

let i = 1;

let transform = -100;
main.style.right = `${transform}dvw`;

leftNav.addEventListener('click', () => {
    if (i !== 0) {
        i -=1;
        transform -= 100;
        pause();
    }
    main.style.right = `${transform}dvw`;
});

rightNav.addEventListener('click', () => {
    if (i !== 2) {
        i +=1;
        transform += 100;
        pause();
    }
    main.style.right = `${transform}dvw`;
});

function pause() {
    playButtons.forEach(button => {
        let player = button.firstChild;
        if (player.classList.contains('fa-pause-circle')) {
            player.classList.replace('fa-pause-circle', 'fa-play-circle');
        }
    });
}


// please gebruik deze functies voor het aanmaken
// en plaatsen van DOM elementen op de website. Scheelt moeite ;P
function create(el, cl) {
    let element = document.createElement(el);
    if (cl) element.classList.add(cl);
    return element;
}

function add(child, parent) {
    if (parent === body) {
        parent.insertBefore(child, document.querySelector('.left-nav'));
    } else {
        parent.appendChild(child);
    }
}