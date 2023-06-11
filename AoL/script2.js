const ANIMATION_DURATION = 200;
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

        selectedIndex = getNextImageIndex(selectedIndex, workoutSelect.length);

        animateSlider(workoutSelect);
        animateContent(workoutInfo, workoutSelect[selectedIndex], (currentIndex + 1) % IMAGES.length);

        workoutSelect[0].innerHTML = `<img src="${IMAGES[currentIndex % 6]}" alt="workout"></img>`
        workoutSelect[1].innerHTML = `<img src="${IMAGES[(currentIndex + 1) % 6]}" alt="workout"></img>`
        workoutSelect[2].innerHTML = `<img src="${IMAGES[(currentIndex + 2) % 6]}" alt="workout"></img>`

        workoutSelect[0].style = "height: 70%;";
        workoutSelect[1].style = "height: 100%;";
        workoutSelect[2].style = "height: 70%;";
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

function animateSlider(workoutSelect) {
    workoutSelect[0].animate(
        [
            { transform: "translateX(100px)", height: "100%" },
            { height: "90%" },
            { height: "80%" },
            { height: "70%" },
        ],
        { duration: ANIMATION_DURATION }
    );

    workoutSelect[2].animate(
        [
            { transform: "translateX(100px)", opacity: 0.2 },
            { opacity: 0.5 },
            { opacity: 0.7 },
            { opacity: 1 },
        ],
        { duration: ANIMATION_DURATION }
    );

    workoutSelect[1].animate([
        { transform: "translateX(100px)", height: "70%" },
        { height: "80%" },
        { height: "90%" },
        { height: "100%" },
    ], { duration: ANIMATION_DURATION});
}

function getNextImageIndex(selectedIndex, workoutSelectLength) {
    return (selectedIndex >= workoutSelectLength - 1) ? 0 : ++selectedIndex;
}
