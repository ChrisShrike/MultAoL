const ANIMATION_DURATION = 150;
const IMAGES = ['img/Frame 1.png', 'img/Frame 2.png', 'img/Frame 3.png', 'img/Frame 4.png', 'img/Frame 5.png', 'img/Frame 6.png']
const BG_IMAGES = ['img/bg/jumping-jacks.jpg', 'img/bg/morning-walk.jpg', 'img/bg/planks.jpg', 'img/bg/planks.jpg', 'img/bg/planks.jpg', 'img/bg/planks.jpg']

function loadWorkoutsSelection() {
    let currentIndex = 1;
    let workoutSelect = document.getElementsByClassName("workout-select");
    let mainElement = document.getElementById("main");
    let content = document.getElementsByClassName("content");
    let selectedIndex = Math.ceil((workoutSelect.length - 1) / 2);
    
    initWorkoutSelectImages(workoutSelect, selectedIndex);

    content[selectedIndex].style = "display: initial";
    mainElement.style = `background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BG_IMAGES[selectedIndex]}); background-size: cover`;


    const NEXT_BTN = document.getElementById("next-btn");
    const PREV_BTN = document.getElementById("previous-btn");

    NEXT_BTN.onclick = function(e) {
        currentIndex++;

        animateSlider(workoutSelect, currentIndex, "left");
        animateContent(content, mainElement, (currentIndex) % IMAGES.length, (currentIndex - 1) % IMAGES.length, "left");

        for(let i = 0; i < workoutSelect.length; ++i) {
            Promise.all(workoutSelect[i].getAnimations().map((animation) => animation.finished)).then(() => {
                workoutSelect[i].innerHTML = `<img src="${IMAGES[(currentIndex + i - 1) % IMAGES.length]}" alt="workout"></img>`
                workoutSelect[0].style = "height: 70%;";
                workoutSelect[1].style = "height: 100%;";
                workoutSelect[2].style = "height: 70%;";
            })
        }        

        workoutSelect[0].style = "height: 70%;";
        workoutSelect[1].style = "height: 100%;";
        workoutSelect[2].style = "height: 70%;";
    };

    PREV_BTN.onclick = function(e) {
        currentIndex--;
        if (currentIndex <= 0) {
            currentIndex = IMAGES.length;
        }

        console.log(currentIndex);
        animateSlider(workoutSelect, currentIndex, "right");
        animateContent(content, mainElement, (currentIndex + 1) % IMAGES.length, (currentIndex) % IMAGES.length, "right");

        for(let i = 0; i < workoutSelect.length; ++i) {
            Promise.all(workoutSelect[i].getAnimations().map((animation) => animation.finished)).then(() => {
                workoutSelect[i].innerHTML = `<img src="${IMAGES[(currentIndex + i) <= 0 ? IMAGES.length : (currentIndex + i - 1) % IMAGES.length]}" alt="workout"></img>`
                workoutSelect[0].style = "height: 70%;";
                workoutSelect[1].style = "height: 100%;";
                workoutSelect[2].style = "height: 70%;";
            })
        }        

        workoutSelect[0].style = "height: 70%;";
        workoutSelect[1].style = "height: 100%;";
        workoutSelect[2].style = "height: 70%;";
    };


}

function initWorkoutSelectImages(workoutSelect, selectedIndex) {
    for (let i = 0; i < workoutSelect.length; ++i) {
        workoutSelect[i].innerHTML = `<img src="${IMAGES[i]}" alt="workout"></img>`;
    }

    workoutSelect[selectedIndex].style = "height: 100%;";
}

function animateContent(contents, elem, index, prevIndex, direction) {
    contents[index].animate(
        [
            { opacity: 0.25 },
            { opacity: 0.5 },
            { opacity: 0.75 },
            { opacity: 1 },
        ],
        { duration: ANIMATION_DURATION }
    );
    elem.animate(
        [
            { opacity: 0.25 },
            { opacity: 0.75 },
            { opacity: 1 },
        ],
        { duration: ANIMATION_DURATION }
    );

    if (direction === "left") {
        contents[index].style = "display: initial";
        contents[prevIndex].style = "display: none";
    } else {
        contents[prevIndex].style = "display: initial";
        contents[index].style = "display: none";
    }

    elem.style = `background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BG_IMAGES[index]}); background-size: cover`
}

function animateSlider(workoutSelect, currentIndex, direction) {
    let initialRightPosition = (direction === "left") ? "100px" : "-100px";
    let finalRightPosition = (direction === "left") ? "55px" : "-55px";
    if (direction === "left") {
        workoutSelect[0].animate(
            [
                { transform: `translateX(${initialRightPosition})`, opacity: 1, right: initialRightPosition, position: "relative"},
                { opacity: 0.5 },
                { opacity: 0.25 },
                { opacity: 0, right: finalRightPosition, position: "relative" },
            ],
            { duration: ANIMATION_DURATION }
        );
        
        workoutSelect[1].animate(
            [
                { transform: `translateX(${initialRightPosition})`, height: "100%", right: initialRightPosition, position: "relative" },
                { height: "90%" },
                { height: "80%" },
                { height: "70%", right: finalRightPosition, position: "relative" },
            ],
            { duration: ANIMATION_DURATION }
        );
    
        workoutSelect[2].animate([
            { transform: `translateX(${initialRightPosition})`, height: "70%", position: "relative", right: initialRightPosition },
            { height: "80%" },
            { height: "90%" },
            { height: "100%", position: "relative", right: finalRightPosition},
        ], { duration: ANIMATION_DURATION});
    } else {
        workoutSelect[2].animate(
            [
                { transform: `translateX(${initialRightPosition})`, opacity: 1, right: initialRightPosition, position: "relative"},
                { opacity: 0.5 },
                { opacity: 0.25 },
                { opacity: 0, right: finalRightPosition, position: "relative" },
            ],
            { duration: ANIMATION_DURATION }
        );
        
        workoutSelect[1].animate(
            [
                { transform: `translateX(${initialRightPosition})`, height: "100%", right: initialRightPosition, position: "relative" },
                { height: "90%" },
                { height: "80%" },
                { height: "70%", right: finalRightPosition, position: "relative" },
            ],
            { duration: ANIMATION_DURATION }
        );
    
        workoutSelect[0].animate([
            { transform: `translateX(${initialRightPosition})`, height: "70%", position: "relative", right: initialRightPosition },
            { height: "80%" },
            { height: "90%" },
            { height: "100%", position: "relative", right: finalRightPosition},
        ], { duration: ANIMATION_DURATION});
    }

    let tempAnimation = document.getElementsByClassName(`temp-animation-${direction}`)[0]
    let tempImageIndex = (direction === "left") ? (currentIndex + 1) % IMAGES.length : (currentIndex - 1) % IMAGES.length

    tempAnimation.innerHTML = `<img src="${IMAGES[tempImageIndex]}" alt="workout"></img>`
    tempAnimation.style = "display: initial;";

    tempAnimation.animate([
        {transform: `translateX(${initialRightPosition})`, display: "initial", opacity: 0.1, right: (direction === "left") ? "25px" : "25px"},
        {opacity: 0.25, right: (direction === "left") ? "50px" : "-50px"},
        {opacity: 0.5, right: (direction === "left") ? "75px" : "-75px"},
        {opacity: 1, right: finalRightPosition, position: "relative", display: "none"},
    ],
    {duration: ANIMATION_DURATION});

    Promise.all(tempAnimation.getAnimations().map((animation) => animation.finished)).then(() => {
        tempAnimation.style = `display: none;`
    })
}