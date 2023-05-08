let boxes = [];
let stars = [];

const STARS_COUNT = 20;
const STAR_SIZE = [5,20];
const BIDIRECTIONAL = `BIDIRECTIONAL`;
const UNIDIRECTIONAL = `UNIDIRECTIONAL`;
const STAR_GENERATION_MODE = UNIDIRECTIONAL;
const STAR_VELOCITY_MIN_AND_MAX = [1.5, 20];
const SIZE_DECREASE_FACTOR = [0.1, 0.4];
const RED = `#F70000`;
const ALMOST_GREEN = `#3DD2D0`;
const MAIN_COLOR = ALMOST_GREEN;

const _50ms = 50;
const _100ms = 50 * 2;
const _1s = _100ms * 10;
const _5s = _1s * 5;
const _10s = _5s * 2;

const GRADIENT_ANIMATION_DURATION = _5s;



function setup() {
    canvas = createCanvas(innerWidth, innerHeight);

    canvas.parent("2");

    const [_, maxSize] = STAR_SIZE.map(Math.abs);
    const starsCount = STARS_COUNT || max(windowWidth, windowHeight) / maxSize;
    stars = Array.from({ length: starsCount }).map(_ => createStar());

    // Create four boxes with random positions
    for (let i = 0; i < 3; i++) {
        let x = width / 2 + random(20);
        let y = height / 2 + random(20);
        let url = "#" + i; // Change this to the desired URL
        let box = new Box(x, y, url);
        boxes.push(box);
    }

    boxes[0].text = "tracer"
    boxes[1].text = "trackmania"
    boxes[2].text = "murders"
}

function draw() {
    background(255);

    noStroke();

    setLinearGradientBackground();

    for(const star of stars) {
        drawStar(star);

        const updatedStar = updateStar(star)

        if (starIsVisible(updatedStar)) {
            stars[stars.indexOf(star)] = updatedStar
        } else {
            stars[stars.indexOf(star)] = createStar()
        }
    }

    // Update and display each box
    for (let box of boxes) {
        box.update();
        box.display();
    }

    // Draw curved lines from the middle to each box
    // let middleX = width / 2;
    // let middleY = height / 2;
    // for (let box of boxes) {
    //     stroke(255, 0, 0); // Red color
    //     noFill();
    //     curve(
    //         middleX, middleY,
    //         middleX + 20, middleY + 50,
    //         box.x + box.width / 2 + 50, box.y + box.height / 2 + 30,
    //         box.x + box.width / 2, box.y + box.height / 2
    //     );
    // }



}

function mouseClicked() {
    // Check if any box was clicked
    for (let box of boxes) {
        if (box.contains(mouseX, mouseY)) {
            window.location.href = box.url; // Redirect to the URL of the clicked box
        }
    }
}

class Box {
    constructor(x, y, url) {
        this.x = x;
        this.y = y;
        this.speedX = random(-2, 2);
        this.speedY = random(-2, 2);
        this.text = "undefined";
        this.width = 100;
        this.height = 50;
        this.url = url;
    }

    update() {
        // Move the box
        this.x += this.speedX;
        this.y += this.speedY;

        // Check boundaries
        if (this.x < 0 || this.x > width - this.width) {
            this.speedX *= -1;
        }
        if (this.y < 0 || this.y > height - this.height) {
            this.speedY *= -1;
        }
    }

    display() {
        // Draw the box
        stroke(0);
        fill(255);
        rect(this.x, this.y, this.width, this.height);

        // Draw the text
        textAlign(CENTER, CENTER);
        fill(0);
        text(this.text, this.x + this.width / 2, this.y + this.height / 2);
    }

    contains(x, y) {
        // Check if the given coordinates are inside the box
        return (
            x > this.x &&
            x < this.x + this.width / 2 + 100 &&
            y > this.y &&
            y < this.y + this.height / 2 + 100
        );
    }
}




function setLinearGradientBackground() {
    background(0, 0, 20);

    const value = (millis() % GRADIENT_ANIMATION_DURATION) / GRADIENT_ANIMATION_DURATION;

    const curve = value > 0.5 ? 1 - value : value;

    const gradientAlpha = curve * 255;

    const gradientColor = color(...hex2rgb(MAIN_COLOR), gradientAlpha);

    setGradient(0, 0, width, height, color(0, 0, 0, 0), gradientColor);
}

function createStar() {
    const [minSize, maxSize] = STAR_SIZE.map(Math.abs);

    const size = random(minSize, maxSize);

    const velocityX = random(...STAR_VELOCITY_MIN_AND_MAX);
    const velocityY = random(...STAR_VELOCITY_MIN_AND_MAX);

    return {
        velocity: {
            x: velocityX / 3,
            y: STAR_GENERATION_MODE === BIDIRECTIONAL ? velocityY : velocityX,
        },
        size,
        position: generateRandomInitialPosition(),
        sizeDecreaseFactor: random(...SIZE_DECREASE_FACTOR),
        initialSize: size,
    }
}

function drawStar(star) {
    const alpha = star.size / star.initialSize * 255;

    const rgb = hex2rgb(MAIN_COLOR);

    fill(...rgb, alpha);

    rect(star.position.x, star.position.y, star.size, star.size);
}

function hex2rgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
}

function generateRandomInitialPosition() {
    const randomBottomPosition = random() <= 0.9;

    return {
        x: randomBottomPosition ? random() * width : width,
        y: randomBottomPosition ? height : random() * height
    }
}

function updateStar({ position, velocity, size, sizeDecreaseFactor, initialSize }) {
    return {
        position: {
            x: position.x - velocity.x,
            y: position.y - velocity.y
        },
        size: size - sizeDecreaseFactor,
        initialSize,
        sizeDecreaseFactor,
        velocity
    }
}

function starIsVisible(star) {
    return star.position.x + star.size < width &&
        star.position.x + star.size > 0 &&
        star.position.y + star.size < height &&
        star.position.y + star.size > 0 &&
        star.size > 0
}

function setGradient(x, y, w, h, c1, c2) {
    noFill();

    for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
    }
}