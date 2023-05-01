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

import data from '../public/content.json' assert { type: 'json' };
console.log(data);
// ------------------------------------------------------------------------------

const assets = [
    {
        title: 'Trackmania-World-Cup-|-Grand-Final-Commentary',
        description: `The quick, brown fox jumps over a lazy dog.
        DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.
        Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack.
        Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just flocked up to quiz and vex him. Adjusting quiver and bow, Zompyc[1] killed the fox. My faxed joke won a pager in the cable TV quiz show. Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl. Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy Fredericka bought many very exquisite opal jewels. Sixty zippers were quickly picked from the woven jute bag. A quick movement of the enemy will jeopardize six gunboats. All questions asked by five watch experts amazed the judge. Jack quietly moved up front and seized the big ball of wax.The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox.
        The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV`,
        image: '',
        titleImage: '',
        color: '#00ff00',
    },
    {
        title: 'traceroute',
        description: `A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the mirror of my soul, as my soul is the mirror of the infinite God! O my friend -- but it is too much for my strength -- I sink under the weight of the splendour of these visions!A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.
        When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and`,
        image: '',
        titleImage: '',
        color: '#ffff00',
    },
    {
        title: 'murdercase',
        description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
        When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline`,
        image: '',
        titleImage: '',
        color: '#00ffff',
    },
];

let sections =[];

assets.forEach(asset => {
    let section = create('section', 'content');
    section.classList.add(asset.title);
    section.setAttribute('id', asset.title);
    section.style.background = asset.color;

    let title;

    let container = create('div', 'container');

    let audioPlayer = create('button', 'audio-player');
    let icon = create('i', 'fa-solid');
    icon.classList.add('fa-play-circle');

    add(icon, audioPlayer);

    let workDescription = create('div', 'work-description');

    let p = create('p');
    p.innerText = asset.description;

    add(p, workDescription);

    if (asset.titleImage === '') {
        title = create('h1', 'title');
        let titleText = asset.title.replaceAll("-", " ");
        title.innerText = titleText;
    } else {
        title = create('img', 'title');
    }


    add(title, section);

    add(audioPlayer, container);
    add(workDescription, container);

    add(container, section);

    add(section, main);

    sections.push({id: asset.title});
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
main.style.left = `${transform}dvw`;

leftNav.addEventListener('click', () => {
    if (i !== 0) {
        i -=1;
        transform += 100;
        pause();
    }
    main.style.left = `${transform}dvw`;
    
    // if (i !== 0) i -=1;
    // let section = sections[i].id;
    // window.location = `#${section}`;
});

rightNav.addEventListener('click', () => {
    if (i !== 2) {
        i +=1;
        transform -= 100;
        pause();
    }
    main.style.left = `${transform}dvw`;

    // if (i !== 2) i +=1;
    // let section = sections[i].id;
    // window.location = `#${section}`;
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
