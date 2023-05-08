const body = document.body;
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const heroButton = document.querySelector(".logo-hero");
const homeButton = document.querySelector(".logo");

const audioTracer = new Audio("../public/testsounds/1.mp3");
const audioMurder = new Audio("../public/testsounds/2.mp3");
const audioTrack = new Audio("../public/testsounds/3.mp3");

let activeHero;

heroButton.addEventListener("click", () => {
  activeHero = !activeHero;
  if (!activeHero) {
    hero.style.top = "0";
  } else {
    hero.style.top = "-100dvh";
  }
});

homeButton.addEventListener("click", () => {
  activeHero = !activeHero;
  if (!activeHero) {
    hero.style.top = "0";
  } else {
    hero.style.top = "-100dvh";
  }
});

// ------------------------------------------------------------------------------

import data from "../public/content.json" assert { type: "json" };
const content = data;

let sections = [];

content.forEach((object) => {
  let section = create("section", "content");
  section.classList.add(object.title);
  section.setAttribute("id", object.title);
  section.style.background = "url(" + object.backgroundImage + ")";
  section.style.backgroundRepeat = "norepeat";
  section.style.backgroundPosition = "center";
  section.style.backgroundSize = "cover";

  let title;

  let container = create("div", "container");

  let audioPlayer = create("button", "audio-player");
  let icon = create("i", "fa-solid");
  icon.classList.add("fa-play-circle");

  add(icon, audioPlayer);

  let repeat = create("button", "repeat");
  icon = create("i", "fa-solid");
  icon.classList.add("fa-rotate-left");

  add(icon, repeat);

  let workDescription = create("div", "work-description");

  let p = create("p");
  p.innerText = object.description;

  add(p, workDescription);

  if (
    object.titleImage === "" ||
    object.titleImage !== "[your description here]"
  ) {
    title = create("h1", "title");
    let titleText = object.title.replaceAll("-", " ");
    title.innerText = titleText;
  } else {
    title = create("img", "title");
  }

  add(title, section);

  add(audioPlayer, container);
  add(repeat, container);
  add(workDescription, container);

  add(container, section);

  add(section, main);

  sections.push({ id: object.title });
});

const playButtons = document.querySelectorAll(".audio-player");

for (let j = 0; j < playButtons.length; j++) {
  playButtons[j].id = j;
}
playButtons.forEach((button) => {
  let state;

  button.addEventListener("click", () => {
    state = !state;

    if (state) {
      button.firstChild.classList.replace("fa-play-circle", "fa-pause-circle");
      switch (button.id) {
        case "0":
          audioTrack.play();
          break;
        case "1":
          audioTracer.play();
          break;
        case "2":
          audioMurder.play();
          break;
        default:
          console.log("No id for audio");
      }
    } else {
      button.firstChild.classList.replace("fa-pause-circle", "fa-play-circle");
      pause();
    }
  });
});

const leftNav = document.querySelector(".left-nav");
const rightNav = document.querySelector(".right-nav");

let i = 1;

let transform = -100;
main.style.right = `${transform}dvw`;

leftNav.addEventListener("click", () => {
  if (i !== 0) {
    i -= 1;
    transform -= 100;
    pause();
  }
  main.style.right = `${transform}dvw`;
});

rightNav.addEventListener("click", () => {
  if (i !== 2) {
    i += 1;
    transform += 100;
    pause();
  }
  main.style.right = `${transform}dvw`;
});

function pause() {
  playButtons.forEach((button) => {
    let player = button.firstChild;
    if (player.classList.contains("fa-pause-circle")) {
      player.classList.replace("fa-pause-circle", "fa-play-circle");
    }
  });

  audioTrack.pause();
  audioTracer.pause();
  audioMurder.pause();
}

// ------------------------------------------------------------------------------

import introduction from "../public/introductory.json" assert { type: "json" };

const intro = document.querySelector(".introductory-text");
intro.innerText = introduction.text;

// ------------------------------------------------------------------------------

function create(el, cl) {
  let element = document.createElement(el);
  if (cl) element.classList.add(cl);
  return element;
}

function add(child, parent) {
  if (parent === body) {
    parent.insertBefore(child, document.querySelector(".left-nav"));
  } else {
    parent.appendChild(child);
  }
}
