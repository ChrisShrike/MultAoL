const ANIMATION_DURATION = 200;
const IMAGES = ['img/jumpJack.png', 'img/mornWalk.png', 'img/Plank.png', 'img/pushup.png', 'img/yoga.png']


function loadWorkoutsSelection() {
    let currentIndex = 0;
    // let charSelect = document.getElementById("char-select");
    let workoutSelect = document.getElementsByClassName("workout-select");
    let workoutInfo = document.getElementById("workout-info"); 
    let selectedIndex = Math.ceil((workoutSelect.length - 1) / 2);
    
    initWorkoutSelectImages(workoutSelect, selectedIndex);

    workoutInfo.innerHTML = `<img src="${IMAGES[selectedIndex]}" class="bg-img"></img>`;

    const NEXT_BTN = document.getElementById("next-btn");
    const PREV_BTN = document.getElementById("previous-btn");

    NEXT_BTN.onclick = function(e) {
        currentIndex++;

        let prevIndex;
        ({ prevIndex, selectedIndex } = getPrevAndNextIndex(selectedIndex, workoutSelect.length));

        animateSlider(workoutSelect, currentIndex);
        animateContent(workoutInfo, workoutSelect[selectedIndex], (currentIndex + 1) % IMAGES.length);

        for(let i = 0; i < workoutSelect.length; ++i) {
            Promise.all(workoutSelect[i].getAnimations().map((animation) => animation.finished)).then(() => {
                workoutSelect[i].innerHTML = `<img src="${IMAGES[(currentIndex + i) % IMAGES.length]}" alt="workout"></img>`
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
        workoutSelect[2].style = "";
        workoutSelect[selectedIndex].children[0].style = "";

        let prevIndex = selectedIndex;
        if (selectedIndex <= 0) {
            selectedIndex = workoutSelect.length - 1;
            prevIndex = 0;
        } else {
            selectedIndex--;
        }

        workoutSelect[2].animate([
            {height: "100%"},
            {height: "90%"},
            {height: "80%"},
            {height: "70%"},
        ], {duration: ANIMATION_DURATION})

        workoutSelect[3].animate(
            [
                {height: "70%"}, 
                {height: "80%"}, 
                {height: "90%"}, 
                {height: "100%"},
            ], 
            {duration: ANIMATION_DURATION}
        );

        // workoutSelect[selectedIndex].style = "height: 100%;";
    };


}

function initWorkoutSelectImages(workoutSelect, selectedIndex) {
    for (let i = 0; i < workoutSelect.length; ++i) {
        workoutSelect[i].innerHTML = `<img src="${IMAGES[i]}" alt="workout"></img>`;
    }

    workoutSelect[selectedIndex].style = "height: 100%;";
}

function animateContent(workoutInfo, workoutSelect, selectedIndex) {
    workoutInfo.animate(
        [
            { opacity: 0.25 },
            { opacity: 0.5 },
            { opacity: 0.75 },
            { opacity: 1 },
        ],
        { duration: 300 }
    );

    workoutInfo.innerHTML = `<img src="${IMAGES[selectedIndex]}" class="bg-img"></img>`;
    workoutInfo.innerHTML += `<p>${workoutSelect.children[0].width}</p>`;
}

function animateSlider(workoutSelect, currentIndex) {
    workoutSelect[1].animate(
        [
            { transform: "translateX(100px)", height: "100%", right: "100px", position: "relative" },
            { height: "90%" },
            { height: "80%" },
            { height: "70%", right: "70px", position: "relative" },
        ],
        { duration: ANIMATION_DURATION }
    );

    workoutSelect[2].animate([
        { transform: "translateX(100px)", height: "70%", position: "relative", right: "100px" },
        { height: "80%" },
        { height: "90%" },
        { height: "100%", position: "relative", right: "70px"},
    ], { duration: ANIMATION_DURATION});

    workoutSelect[0].animate(
        [
            { transform: "translateX(100px)", opacity: 1, right: "100px", position: "relative"},
            { opacity: 0.5 },
            { opacity: 0.25 },
            { opacity: 0, right: "70px", position: "relative" },
        ],
        { duration: ANIMATION_DURATION }
    );

    let tempAnimation = document.getElementsByClassName("temp-animation")[0]
    tempAnimation.innerHTML = `<img src="${IMAGES[(currentIndex + 2) % IMAGES.length]}" alt="workout"></img>`
    tempAnimation.style = "display: initial";
    tempAnimation.animate([
        {transform: "translateX(100px)", display: "initial", opacity: 0.1, right: "100px", position: "relative"},
        {opacity: 0.25},
        {opacity: 0.5},
        {opacity: 1, right: "70px", position: "relative", display: "none"},
    ],
    {duration: ANIMATION_DURATION});

    Promise.all(tempAnimation.getAnimations().map((animation) => animation.finished)).then(() => {
        tempAnimation.style = `display: none;`
    })
}

function getPrevAndNextIndex(selectedIndex, workoutSelectLength) {
    let prevIndex = selectedIndex;
    if (selectedIndex >= workoutSelectLength - 1) {
        selectedIndex = 0;
        prevIndex = workoutSelectLength - 1;
    } else {
        selectedIndex++;
    }
    return { prevIndex, selectedIndex };
}