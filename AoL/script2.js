const ANIMATION_DURATION = 100;
const IMAGES = ['img/example1.jpg', 'img/example2.jpg', 'img/example3.jpeg', 'img/example4.jpg', 'img/ex1.png', 'img/ban1.png']


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

        animateSlider(workoutSelect, selectedIndex, prevIndex);
        animateContent(workoutInfo, workoutSelect[selectedIndex], (currentIndex + 1) % IMAGES.length);

        workoutSelect[0].innerHTML = `<img src="${IMAGES[currentIndex % 6]}" alt="workout"></img>`
        workoutSelect[1].innerHTML = `<img src="${IMAGES[(currentIndex + 1) % 6]}" alt="workout"></img>`
        workoutSelect[2].innerHTML = `<img src="${IMAGES[(currentIndex + 2) % 6]}" alt="workout"></img>`

        workoutSelect[0].style = "height: 70%;";
        workoutSelect[1].style = "height: 100%;";
        workoutSelect[2].style = "";
    };

    PREV_BTN.onclick = function(e) {
        workoutSelect[selectedIndex].style = "";
        workoutSelect[selectedIndex].children[0].style = "";

        let prevIndex = selectedIndex;
        if (selectedIndex <= 0) {
            selectedIndex = workoutSelect.length - 1;
            prevIndex = 0;
        } else {
            selectedIndex--;
        }

        workoutSelect[prevIndex].animate([
            {height: "100%"},
            {height: "90%"},
            {height: "80%"},
            {height: "70%"},
        ], {duration: ANIMATION_DURATION})

        workoutSelect[selectedIndex].animate(
            [
                {height: "70%"}, 
                {height: "80%"}, 
                {height: "90%"}, 
                {height: "100%"},
            ], 
            {duration: ANIMATION_DURATION}
        );

        workoutSelect[selectedIndex].style = "height: 100%;";
    };


}

function initWorkoutSelectImages(workoutSelect, selectedIndex) {
    for (let i = 0; i < workoutSelect.length; ++i) {
        workoutSelect[i].innerHTML = `<img src="${IMAGES[i]}" alt="workout"></img>`;
    }

    workoutSelect[selectedIndex].style = "height: 100%;";
}

function animateContent(workoutInfo, workoutSelect, selectedIndex) {
    console.log(selectedIndex);

    workoutInfo.animate(
        [
            { opacity: 0 },
            { opacity: 0.5 },
            { opacity: 1 },
        ],
        { duration: 300 }
    );

    workoutInfo.innerHTML = `<img src="${IMAGES[selectedIndex]}" class="bg-img"></img>`;
    let currentImage = new Image();
    // currentImage.src = workoutSelect.children[0].w;
    workoutInfo.innerHTML += `<p>${workoutSelect.children[0].width}</p>`;
}

function animateSlider(workoutSelect, selectedIndex, prevIndex) {
    workoutSelect[0].animate(
        [
            { transform: "translateX(7.5em)", height: "100%" },
            { height: "90%" },
            { height: "80%" },
            { height: "70%" },
        ],
        { duration: ANIMATION_DURATION}
    );

    workoutSelect[2].animate(
        [
            { transform: "translateX(7.5em)", opacity: 0.2 },
            { opacity: 0.5 },
            { opacity: 0.7 },
            { opacity: 1 },
        ],
        { duration: ANIMATION_DURATION }
    );

    workoutSelect[1].animate([
        { transform: "translateX(7.5em)", height: "70%" },
        { height: "80%" },
        { height: "90%" },
        { height: "100%" },
    ], { duration: ANIMATION_DURATION});

    workoutSelect[selectedIndex].style = "position: relative; right: 7.5em;";
    workoutSelect[prevIndex].style = "position: relative; right: 7.35em";
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
