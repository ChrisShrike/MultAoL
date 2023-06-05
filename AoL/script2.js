const ANIMATION_DURATION = 100;
const IMAGES = ['img/example1.jpg', 'img/example2.jpg', 'img/example3.jpeg', 'img/example4.jpg', 'img/ex1.png', 'img/ex2.png', 'img/ban1.png']

function loadWorkoutsSelection() {
    // let charSelect = document.getElementById("char-select");
    let workoutSelect = document.getElementsByClassName("workout-select");
    
    for (let i = 0; i < IMAGES.length; ++i) {
        workoutSelect[i].innerHTML = `<img src="${IMAGES[i]}" alt="workout"></img>`;
    }

    let initialIndex = (workoutSelect.length - 1) / 2;

    let workoutInfo = document.getElementById("workout-info"); 

    workoutSelect[initialIndex].style = "height: 100%;";
    workoutInfo.innerHTML = `<img src="${IMAGES[initialIndex]}" class="bg-img"></img>`;

    nextSelectBtn = document.getElementById("next-btn");
    prevSelectBtn = document.getElementById("previous-btn");

    nextSelectBtn.onclick = function(e) {
        workoutSelect[initialIndex].style = "";
        workoutSelect[initialIndex].children[0].style = "";

        let prevIndex = initialIndex;
        if (initialIndex >= workoutSelect.length - 1) {
            initialIndex = 0;
            prevIndex = workoutSelect.length - 1;
        } else {
            initialIndex++;
        }

        workoutSelect[initialIndex].animate(
            [
                {height: "70%"}, 
                {height: "80%"}, 
                {height: "90%"}, 
                {height: "100%"},
            ], 
            {duration: ANIMATION_DURATION}
        );

        workoutSelect[prevIndex].animate([
            {height: "100%"},
            {height: "90%"},
            {height: "80%"},
            {height: "70%"},
        ], {duration: ANIMATION_DURATION});

        workoutSelect[initialIndex].style = "height: 100%;";

        workoutInfo.animate(
            [
                {opacity: 0},
                {opacity: 0.5},
                {opacity: 1},
            ],
            {duration: 300}
        )
        // workoutInfo.style = "opacity: 1;";

        workoutInfo.innerHTML = `<img src="${IMAGES[initialIndex]}" class="bg-img"></img>`;

    };

    prevSelectBtn.onclick = function(e) {
        workoutSelect[initialIndex].style = "";
        workoutSelect[initialIndex].children[0].style = "";

        let prevIndex = initialIndex;
        if (initialIndex <= 0) {
            initialIndex = workoutSelect.length - 1;
            prevIndex = 0;
        } else {
            initialIndex--;
        }

        workoutSelect[initialIndex].animate(
            [
                {height: "70%"}, 
                {height: "80%"}, 
                {height: "90%"}, 
                {height: "100%"},
            ], 
            {duration: ANIMATION_DURATION}
        );

        workoutSelect[prevIndex].animate([
            {height: "100%"},
            {height: "90%"},
            {height: "80%"},
            {height: "70%"},
        ], {duration: ANIMATION_DURATION})

        workoutSelect[initialIndex].style = "height: 100%;";

        workoutInfo.innerHTML = `<p>${initialIndex}</p>`;
        
        workoutInfo.animate(
            [
                {opacity: 0},
                {opacity: 0.5},
                {opacity: 1},
            ],
            {duration: 300}
        )
        workoutInfo.innerHTML = `<img src="${IMAGES[initialIndex]}" class="bg-img"></img>`;


    };


}